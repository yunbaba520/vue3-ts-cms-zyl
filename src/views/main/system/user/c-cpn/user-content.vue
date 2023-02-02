<template>
  <div class="user-content">
    <div class="header">
      <h2>用户列表</h2>
      <el-button type="primary" @click="handlerAddUser">新增用户</el-button>
    </div>
    <el-table :data="userList" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="用户名" width="180" />
      <el-table-column prop="realname" label="真实姓名" width="180" />
      <el-table-column prop="cellphone" label="手机号码" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-button :type="scope.row.enable ? 'primary' : 'info'" plain>{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="创建时间">
        <template #default="scope">
          {{ formatTimeByUtc(scope.row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column label="更新时间">
        <template #default="scope">
          {{ formatTimeByUtc(scope.row.updateAt) }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default>
          <el-button type="primary" link icon="Edit">编辑</el-button>
          <el-button type="danger" link icon="Delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 15, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useUser from '@/stores/main/system/user'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { formatTimeByUtc } from '@/utils/format'
const emit = defineEmits(['addClick'])
const userStore = useUser()
const currentPage = ref(1)
const pageSize = ref(10)
const searchPaginationParams = computed(() => ({
  offset: (currentPage.value - 1) * pageSize.value,
  size: pageSize.value
}))

let searchQueryParams = {}
fetchGetUserList()
// 发起action，获取数据
function fetchGetUserList() {
  userStore.getUserListAction({
    ...searchPaginationParams.value,
    ...searchQueryParams
  })
}
// storeToRefs解构后仍保持响应式
const { userList, totalCount } = storeToRefs(userStore)
// 分页
function handleSizeChange() {
  // 每页条数改变
  currentPage.value = 1
  fetchGetUserList()
}
function handleCurrentChange() {
  fetchGetUserList()
}
// 提供user，主要获取queryParams
function exportFunChangeParams(params: any) {
  searchQueryParams = params
  fetchGetUserList()
}
function exportFunResetData(params: any) {
  currentPage.value = 1
  pageSize.value = 10
  searchQueryParams = params
  fetchGetUserList()
}
// 点击新增用户
function handlerAddUser() {
  emit('addClick')
}
// 暴露属性与方法
defineExpose({ exportFunChangeParams, exportFunResetData })
</script>

<style scoped lang="less">
.user-content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .pagination {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
