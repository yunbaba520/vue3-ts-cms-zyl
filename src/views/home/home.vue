<template>
  <div class="home">
    <el-container class="home-area">
      <el-aside width="210px" class="aside-area">
        <nav-aside></nav-aside>
      </el-aside>
      <el-container>
        <el-header height="50px" class="header-area">
          <nav-header></nav-header>
        </el-header>
        <el-main class="main-area">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// nav-aside , nav-header在components.d.ts中注册
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .home-area {
    height: 100%;
    .aside-area {
      height: 100%;
      background-color: #001529;
    }
    .header-area {
      background-color: pink;
    }
    .main-area {
      background-color: #f0f2f5;
    }
  }
}
</style>
