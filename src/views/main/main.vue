<template>
  <div class="main">
    <el-container class="main-area">
      <el-aside :width="isFold ? '60px' : '210px'" class="aside-area">
        <nav-aside :sideIsFold="isFold"></nav-aside>
      </el-aside>
      <el-container>
        <el-header height="50px" class="header-area">
          <nav-header @is-fold-change="handlerIsFoldChange"></nav-header>
        </el-header>
        <el-main class="main-area">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// nav-aside , nav-header在components.d.ts中注册
const isFold = ref(false)
function handlerIsFoldChange(value: boolean) {
  isFold.value = value
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  .main-area {
    height: 100%;
    .aside-area {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #001529;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none;
      }
      transition: width 0.4s ease;
    }
    .main-area {
      background-color: #f0f2f5;
    }
  }
}
</style>
