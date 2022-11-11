<template>
  <div class="form-account">
    <el-form label-width="60px" :model="accountForm" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="account">
        <el-input v-model="accountForm.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import {ElMessage} from "element-plus"
const accountForm = reactive({
  account: '',
  password: ''
})
const formRef = ref<FormInstance>()
const rules = {
  account: [
    { required: true, message: '必须输入账号~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6~20个字母或数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必须输入密码~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须在3位以上', trigger: 'blur' }
  ]
}
function submit() {
  console.log(accountForm.account);
  console.log(accountForm.password);
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      console.log(accountForm);

    } else {
      ElMessage.error('Oops, this is a error message.')
    }
  })
}
// 定义暴露的属性与方法
defineExpose({
  submit
})
</script>

<style scoped lang="less">
.form-account {
}
</style>
