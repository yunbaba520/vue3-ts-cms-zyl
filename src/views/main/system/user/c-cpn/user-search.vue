<template>
  <div class="user-search">
    <el-form :model="formData" label-width="120px" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名称" prop="name">
            <el-input placeholder="请输入用户名称" v-model="formData.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              placeholder="请输入真实姓名"
              v-model="formData.realname"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码" prop="cellphone">
            <el-input
              placeholder="请输入手机号码"
              v-model="formData.cellphone"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select
              placeholder="请选择状态"
              :style="{ width: '100%' }"
              v-model="formData.enable"
            >
              <el-option label="启用" value="1" />
              <el-option label="禁用" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="formData.createAt"
              type="daterange"
              range-separator="—"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button icon="Refresh" @click="handlerRefresh">重置</el-button>
      <el-button type="primary" icon="Search" @click="handlerSearch"
        >查询</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
const emit = defineEmits(['searchData', 'resetData'])
// 表单数据
const formData = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: '1',
  createAt: ''
})
const formRef = ref<FormInstance>()
// 重置,item需要绑定prop
function handlerRefresh() {
  formRef.value?.resetFields()
  emit('resetData', formData)
}
// 查询
function handlerSearch() {
  emit('searchData', formData)
}
</script>

<style scoped lang="less">
.user-search {
  background-color: #fff;
  padding: 20px;
  .el-form-item {
    padding: 0 20px;
    margin: 8px 0;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
