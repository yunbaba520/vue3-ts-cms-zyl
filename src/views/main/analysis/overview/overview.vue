<template>
  <div class="overview">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>关于</span>
        </div>
      </template>
      <div>
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </el-card>
    <el-card class="two-card">
      <template #header>
        <div class="card-header">
          <span>技术栈</span>
        </div>
      </template>
      <ul class="two-card-ul">
        <template v-for="item in liList" :key="item.key">
          <li class="two-card-li">
            <span>{{ item.key }}</span>
            <ElButton type="primary" link>{{ item.value }}</ElButton>
          </li>
        </template>
      </ul>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="overview">
import { reactive } from 'vue'

const liList = reactive([
  {
    key: '开发工具 :',
    value: 'Visual Studio Code'
  },
  {
    key: '编程语言 :',
    value: 'TypeScript 4.x + JavaScript'
  },
  {
    key: '构建工具 :',
    value: 'Vite 3.x'
  },
  {
    key: '前端框架 :',
    value: 'Vue 3.x'
  },
  {
    key: '路由工具 :',
    value: 'Vue Router 4.x'
  },
  {
    key: '状态管理 :',
    value: 'Pinia 2.x'
  },
  {
    key: 'UI 框架 :',
    value: 'Element Plus'
  },
  {
    key: '可视化 :',
    value: 'Echart5.x'
  },
  {
    key: '富文本 :',
    value: 'WangEditor'
  },
  {
    key: '工具库 :',
    value: '@vueuse/core + dayjs + countup.js'
  },
  {
    key: 'CSS 预编译 :',
    value: 'Less'
  },
  {
    key: 'HTTP 工具',
    value: 'Axios'
  },
  {
    key: 'Git Hook 工具 :',
    value: 'husky'
  },
  {
    key: '代码规范 :',
    value: 'EditorConfig + Prettier + ESLint'
  },
  {
    key: '提交规范 :',
    value: 'Commitizen + Commitlint'
  },
  {
    key: '自动部署 :',
    value: 'Centos + Jenkins + Nginx'
  }
])
</script>

<style scoped lang="less">
.overview {
  .card-header {
    font-weight: 700;
  }
  .two-card {
    margin-top: 20px;
    .two-card-ul {
      padding: 0 20px;
      .two-card-li {
        margin-top: 10px;
      }
    }
  }
}
</style>
