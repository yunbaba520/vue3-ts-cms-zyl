import { defineStore } from 'pinia'
import {
  getUserInfoById,
  getUserMenuById,
  requestLogin
} from '@/service/login/login'
import type { ILoginAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router, { addRoutesWithMenu } from '@/router'
import useDepartment from '../main/system/department'
import useRole from '../main/system/role'

interface ILoginState {
  token: string
  userInfo: any
  userMenu: any
}
const useLogin = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenu: []
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
      addRoutesWithMenu(this.userMenu)
      // 获取角色，部门列表
      const departmentStore = useDepartment()
      departmentStore.getDepartmentListAction()
      const roleStore = useRole()
      roleStore.getRoleListAction()
      // 跳转main页
      router.push('/main')
    },
    // 刷新
    handlerRefresh() {
      this.token = localCache.getCache('login/token') ?? ''
      this.userInfo = localCache.getCache('user/info') ?? {}
      this.userMenu = localCache.getCache('user/menu') ?? []
      if (this.token&&this.userMenu) {
        // 动态注册路由
        addRoutesWithMenu(this.userMenu)
        // 获取角色，部门列表
        const departmentStore = useDepartment()
        departmentStore.getDepartmentListAction()
        const roleStore = useRole()
        roleStore.getRoleListAction()
      }

    }
  }
})
export default useLogin
