<template>
  <div class="login-area">
    <h1 class="title">ZY后台管理项目</h1>
    <el-tabs type="border-card" stretch v-model="tabSelect">
      <el-tab-pane name="account">
        <template #label>
          <span class="icon">
            <el-icon><UserFilled /></el-icon>
            <span class="text">账号登录</span>
          </span>
        </template>
        <form-account ref="refFormAccount"></form-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="icon">
            <el-icon><Iphone /></el-icon>
            <span class="text">手机登录</span>
          </span>
        </template>
        <form-phone></form-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="password-status">
      <el-checkbox v-model="isRemember" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handlerSubmit">
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import type { Instance } from 'element-plus'
import { ref } from 'vue'
import FormAccount from './form-account.vue'
import FormPhone from './form-phone.vue'

const isRemember = ref(false)
const tabSelect = ref('account')
const refFormAccount = ref<InstanceType<typeof FormAccount>>()
function handlerSubmit() {
  if (tabSelect.value === 'account') {
    refFormAccount.value?.submit()
  } else {
    console.log("手机");

  }
}
</script>

<style scoped lang="less">
.login-area {
  width: 330px;
  margin-bottom: 100px;
  // border: 1px solid #999;
  .title {
    text-align: center;
    margin-bottom: 10px;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      margin-left: 5px;
    }
  }
  .password-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login-btn {
    width: 100%;
    // margin-top: 10px;
  }
}
</style>
