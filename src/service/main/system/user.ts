import gsRequest from '@/service'

export function getUserList(params: any) {
  return gsRequest.post({
    url: '/users/list',
    data: params
  })
}
