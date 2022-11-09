<template>
  <div class="app">App</div>
  <RouterLink to="/home">home</RouterLink>
  <RouterLink to="/login">login</RouterLink>
  <RouterView></RouterView>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
