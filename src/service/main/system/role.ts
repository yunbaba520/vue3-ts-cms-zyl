import gsRequest from "@/service";

export function getRoleList(params: any = {}) {
  return gsRequest.post({
    url:'/role/list',
    data: params
  })
}
