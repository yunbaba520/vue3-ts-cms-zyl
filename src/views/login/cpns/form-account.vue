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
import type { FormInstance,FormRules } from "element-plus";
import {ElMessage} from "element-plus"
import useLogin from "@/stores/login/login";
const loginStore = useLogin()
const accountForm = reactive({
  account: 'coderwhy',
  password: '123456'
})
const formRef = ref<FormInstance>()
const rules: FormRules = {
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
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      const name = accountForm.account
      const password = accountForm.password
      // 进行登录逻辑
      loginStore.loginAction({ name, password })
    } else {
      ElMessage.error('请规范填写账号密码~')
    }
  })
}
// 定义暴露的属性与方法
defineExpose({
  submit
})
</script>

<style scoped lang="less">
// .form-account {
// }
</style>
