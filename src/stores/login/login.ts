import { defineStore } from 'pinia'
import {
  getUserInfoById,
  getUserMenuById,
  requestLogin
} from '@/service/login/login'
import type { ILoginAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router, { addRoutesWithMenu } from '@/router'

interface ILoginState {
  token: string
  userInfo: any
  userMenu: any
}
const useLogin = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache('login/token') ?? '',
    userInfo: localCache.getCache('user/info') ?? {},
    userMenu: localCache.getCache('user/menu') ?? []
  }),
  actions: {
    // 登录
    async loginAction(params: ILoginAccount) {
      const res = await requestLogin(params)
      const id = res.data.id
      this.token = res.data.token
      // 保存本地
      localCache.setCache('login/token', this.token)
      // 获取用户详细信息(权限)
      const userInfoRes = await getUserInfoById(id)
      this.userInfo = userInfoRes.data
      localCache.setCache('user/info', userInfoRes.data)
      const roleId = this.userInfo.role.id
      // 获取用户菜单
      const userMenuRes = await getUserMenuById(roleId)
      this.userMenu = userMenuRes.data
      localCache.setCache('user/menu', userMenuRes.data)
      // 动态注册路由
      addRoutesWithMenu(userMenuRes.data)

      // 跳转main页
      router.push('/main')
    }
  }
})
export default useLogin
