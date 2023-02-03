import gsRequest from '@/service'

export function getUserList(params: any) {
  return gsRequest.post({
    url: '/users/list',
    data: params
  })
}
// 新增
export function addUser(params: any) {
  return gsRequest.post({
    url:"/users",
    data:params
  })
}
