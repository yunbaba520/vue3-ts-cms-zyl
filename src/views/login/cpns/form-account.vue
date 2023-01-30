<template>
  <div class="form-account">
    <el-form
      label-width="60px"
      :model="accountForm"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { ILoginAccount } from '@/types'
import { ElMessage } from 'element-plus'
import useLogin from '@/stores/login/login'
import { localCache } from '@/utils/cache'

// 数据
const accountForm = reactive<ILoginAccount>({
  name: localCache.getCache('login/name') ?? '',
  password: localCache.getCache('login/password') ?? ''
})
// 规则
const rules: FormRules = {
  name: [
    { required: true, message: '必须输入账号~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须在3位以上', trigger: 'blur' }
  ]
}
// 登录逻辑
const loginStore = useLogin()
const formRef = ref<FormInstance>()
function submit(isRemember: boolean) {
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      const name = accountForm.name
      const password = accountForm.password
      // 进行登录逻辑
      loginStore.loginAction({ name, password }).then(()=>{
        // 表示登录成功
        // 记住账号密码
        if(isRemember) {
          // 记住密码
          localCache.setCache('login/name',name)
          localCache.setCache('login/password',password)
          localCache.setCache('login/isRemember',isRemember)
        } else {
          // 不记住密码
          localCache.removeCache('login/name')
          localCache.removeCache('login/password')
          localCache.removeCache('login/isRemember')
        }
      })
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
