<template>
  <div class="user-content">
    <div class="header">
      <h2>用户列表</h2>
      <el-button type="primary">新增用户</el-button>
    </div>
    <el-table :data="userList" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="用户名" width="180" />
      <el-table-column prop="realname" label="真实姓名" width="180" />
      <el-table-column prop="cellphone" label="手机号码" />
      <el-table-column label="状态">
        <template #default="scope">

          <el-button :type="scope.row.enable ? 'primary':'info'" plain>{{ scope.row.enable ? '启用':'禁用'}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" />
      <el-table-column prop="updateAt" label="更新时间" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" link icon="Edit">编辑</el-button
          >
          <el-button type="danger" link icon="Delete">删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import useUser from '@/stores/main/system/user';
import { storeToRefs } from 'pinia';
// 发起action，获取数据
const userStore =  useUser()
userStore.getUserListAction()
// storeToRefs解构后仍保持响应式
const {userList} = storeToRefs(userStore)


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
}
</style>
