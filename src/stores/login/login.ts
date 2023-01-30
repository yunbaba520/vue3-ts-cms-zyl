import { defineStore } from "pinia";
import { requestLogin } from "@/service/login/login";
import type { ILoginAccount } from "@/types";
import { localCache } from "@/utils/cache";
const useLogin = defineStore('login', {
  state: () => ({
    id: '',
    name: '',
    token: localCache.getCache('login/token') || ''
  }),
  actions: {
    // 登录
    async loginAction(params: ILoginAccount) {
      const res = await requestLogin(params)
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token
      // 保存本地
      localCache.setCache('login/token', this.token)
    }
  }
})
export default useLogin
