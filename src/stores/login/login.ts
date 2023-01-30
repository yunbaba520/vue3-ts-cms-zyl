import { defineStore } from "pinia";
import { getUserInfoById, getUserMenuById, requestLogin } from "@/service/login/login";
import type { ILoginAccount } from "@/types";
import { localCache } from "@/utils/cache";
import router from "@/router";

interface ILoginState {
  token: string,
  userInfo: any,
  userMenu: any
}
const useLogin = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache('login/token') || '',
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
      const roleId = this.userInfo.role.id
      // 获取用户菜单
      const userMenuRes = await getUserMenuById(roleId)
      this.userMenu = userMenuRes.data
      // 跳转home页
      router.push('/home')
    }
  }
})
export default useLogin
