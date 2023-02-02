<template>
  <div class="user-search">
    <el-form :model="formData" label-width="120px" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名称" prop="name">
            <el-input placeholder="请输入用户名称" v-model="formData.name"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名">
            <el-input placeholder="请输入真实姓名"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码">
            <el-input placeholder="请输入手机号码"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态">
            <el-select placeholder="请选择状态" :style="{width:'100%'}">
              <el-option
                label="启用"
                value="1"
              />
              <el-option
                label="禁用"
                value="0"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间">
            <el-date-picker
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
      <el-button type="primary" icon="Search">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
const formData = reactive({
  name:''
})
const formRef = ref<FormInstance>()
function handlerRefresh() {
  // 重置item需要绑定prop
  formRef.value?.resetFields()
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
