import type { ILoginAccount } from "@/types";
import gsRequest from "..";

export function requestLogin(params: ILoginAccount) {
  return gsRequest.post({
    url: '/login',
    data: params
  })
}
