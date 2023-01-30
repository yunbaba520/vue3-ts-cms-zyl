import gsRequest from "..";

export function requestLogin(params:any) {
  return gsRequest.post({
    url: '/login',
    data: params
  })
}
