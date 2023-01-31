<template>
  <div class="nav-aside">
    <div class="aside-top">
      <img src="@/assets/img/logo.svg" alt="" />
      <span>ZY后台管理项目</span>
    </div>
    <el-menu
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
    >
      <template v-for="item in userMenu" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.id">
            <el-menu-item :index="subItem.id + ''">{{ subItem.name }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import useLoginStore from "@/stores/login/login";
// 菜单数据
const loginStore = useLoginStore()
const userMenu = loginStore.userMenu
console.log(userMenu);

</script>

<style lang="less" scoped>
.nav-aside {
  .aside-top {
    height: 28px;
    display: flex;
    align-items: center;
    padding: 12px 10px 8px 10px;

    img {
      height: 100%;
      margin: 0 10px;
    }
    span {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
    user-select: none;
    .el-sub-menu {
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135;
      }

      .el-menu-item:hover {
        color: #fff;
      }

      .el-menu-item.is-active {
        background-color: #0a60bd;
      }
    }
  }

}
</style>
