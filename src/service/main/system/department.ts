import gsRequest from "@/service";

export function getDepartmentList(params: any = {}) {
  return gsRequest.post({
    url:'/department/list',
    data: params
  })
}
