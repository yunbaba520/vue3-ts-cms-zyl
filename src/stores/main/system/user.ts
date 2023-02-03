import { addUser, getUserList } from '@/service/main/system/user'
import { defineStore } from 'pinia'

const useUser = defineStore('user', {
  state: () => ({
    userList: [],
    totalCount: 0
  }),
  actions: {
    async getUserListAction(params: any) {
      const res = await getUserList(params)
      this.userList = res.data.list
      this.totalCount = res.data.totalCount
    },
    async addUserAction(params: any) {
      const res = await addUser(params)

      return res
    }
  }
})
export default useUser
