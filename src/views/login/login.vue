<template>
  <div class="login">
    <login-area></login-area>
  </div>
</template>

<script setup lang="ts">
import LoginArea from './cpns/login-area.vue'
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #eeffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
