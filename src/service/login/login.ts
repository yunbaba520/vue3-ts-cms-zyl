import type { ILoginAccount } from "@/types";
import gsRequest from "..";
// 账号密码登录
export function requestLogin(params: ILoginAccount) {
  return gsRequest.post({
    url: '/login',
    data: params
  })
}
// 根据id获取用户详细信息
export function getUserInfoById(id: number) {
  return gsRequest.get({
    url: `/users/${id}`
  })
}
