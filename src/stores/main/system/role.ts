import { getRoleList } from "@/service/main/system/role";
import { defineStore } from "pinia";
interface IRoleState {
  roleList:any[],
  totalCount: number
}
const useRole = defineStore('role',{
  state: (): IRoleState =>({
    roleList:[],
    totalCount: 0
  }),
  actions:{
    async getRoleListAction() {
      const res = await getRoleList()
      this.roleList = res.data.list
      this.totalCount = res.data.totalCount
    }
  }
})

export default useRole
