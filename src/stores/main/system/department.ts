import { getDepartmentList } from '@/service/main/system/department'
import { defineStore } from 'pinia'
interface IDepartmentState {
  departmentList: any[],
  totalCount: number
}
const useDepartment = defineStore('department', {
  state: (): IDepartmentState => ({
    departmentList: [],
    totalCount: 0
  }),
  actions: {
    async getDepartmentListAction() {
      const res = await getDepartmentList()
      this.departmentList = res.data.list
      this.totalCount = res.data.totalCount
    }
  }
})
export default useDepartment
