import gsRequest from "@/service";

export function getUserList() {
  return gsRequest.post({
    url:'/users/list',
    data:{
      "offset": 0,
      "size": 10,
    }
  })
}
