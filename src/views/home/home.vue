<template>
  <div class="home">
    home
    <el-button type="primary" @click="handlerSignOut">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { localCache } from '@/utils/cache';

const handlerSignOut = ()=>{
  localCache.removeCache('login/token')
  router.push('/login')
}
</script>

<style scoped></style>
