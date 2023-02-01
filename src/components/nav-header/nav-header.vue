<template>
  <div class="nav-header">
    <div class="left-area">
      <el-icon size="28px" @click="handlerLeftIconClick">
        <component :is="isFold ? 'expand' : 'fold'"></component>
      </el-icon>
      <el-breadcrumb separator="/">
        <template v-for="item in breadcrumbArr" :key="item.name">
          <!-- :to="item.path" 这个暂时不需要-->
          <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="right-area">
      <div class="icons">
        <el-icon><ChatDotRound /></el-icon>
        <el-icon><Camera /></el-icon>
        <el-icon><Star /></el-icon>
      </div>
      <el-dropdown>
        <div class="user-info">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span> {{ name }} </span>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="user">个人信息</el-dropdown-item>
            <el-dropdown-item icon="edit">修改密码</el-dropdown-item>
            <el-dropdown-item icon="SwitchButton" @click="handlerExit"
              >退出系统</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { localCache } from '@/utils/cache'
import { mapPathToBreadcrumbs } from '@/utils/mapMenus'
import { ref, computed } from 'vue'
import useLoginStore from '@/stores/login/login'
import { useRoute } from 'vue-router'
const emit = defineEmits(['isFoldChange'])
// 侧边栏展开折叠
const isFold = ref(false)
function handlerLeftIconClick() {
  isFold.value = !isFold.value
  emit('isFoldChange', isFold.value)
}
// 用户信息
const loginStore = useLoginStore()
const name = loginStore.userInfo.name
// 面包屑

const breadcrumbArr = computed(() => {
  const route = useRoute()
  const menus = loginStore.userMenu
  return mapPathToBreadcrumbs(menus, route.path)
})
console.log(breadcrumbArr)

// 退出
function handlerExit() {
  localCache.removeCache('login/token')
  localCache.removeCache('user/menu')
  localCache.removeCache('user/info')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.nav-header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-area {
    display: flex;
    align-items: center;
    .el-icon {
      cursor: pointer;
    }
    .el-breadcrumb {
      margin-left: 20px;
    }
  }
  .right-area {
    display: flex;
    align-items: center;
    .icons {
      display: flex;
      i {
        font-size: 20px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
    .user-info {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
