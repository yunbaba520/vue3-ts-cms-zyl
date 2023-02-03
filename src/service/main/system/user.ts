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
// 编辑
export function editUser(id: number, params: any) {
  return gsRequest.patch({
    url:`/users/${id}`,
    data: params
  })
}
// 删除
export function deleteUser(id: number) {
  return gsRequest.delete({
    url:`/users/${id}`
  })
}
