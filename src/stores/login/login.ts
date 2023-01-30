import { defineStore } from "pinia";
import { getUserInfoById, requestLogin } from "@/service/login/login";
import type { ILoginAccount } from "@/types";
import { localCache } from "@/utils/cache";
import router from "@/router";
const useLogin = defineStore('login', {
  state: () => ({
    token: localCache.getCache('login/token') || ''
  }),
  actions: {
    // 登录
    async loginAction(params: ILoginAccount) {
      const res = await requestLogin(params)
      const id = res.data.id
      const name = res.data.name
      this.token = res.data.token
      // 保存本地
      localCache.setCache('login/token', this.token)
      // 获取用户详细信息(权限)
      const userInfo = await getUserInfoById(id)
      console.log(userInfo);

      // 跳转home页
      router.push('/home')
    }
  }
})
export default useLogin
