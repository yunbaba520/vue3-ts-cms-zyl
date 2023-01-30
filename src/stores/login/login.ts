import { defineStore } from "pinia";
import { requestLogin } from "@/service/login/login";
import type { ILoginAccount } from "@/types";
const useLogin = defineStore('login', {
  state: () => ({
    id: '',
    name: '',
    token: ''
  }),
  actions: {
    // 登录
    async loginAction(params: ILoginAccount) {
      const res = await requestLogin(params)
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token
    }
  }
})
export default useLogin
