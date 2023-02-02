<template>
  <div class="user">
    <user-search
      @search-data="handlerSearchData"
      @reset-data="handlerResetData"
    ></user-search>
    <user-content ref="userContentRef"></user-content>
  </div>
</template>

<script setup lang="ts" name="user">
import UserSearch from './c-cpn/user-search.vue'
import UserContent from './c-cpn/user-content.vue'
import { ref } from 'vue'
const userContentRef = ref<InstanceType<typeof UserContent>>()
function handlerSearchData(searchData: any) {
  userContentRef.value?.exportFunChangeParams(searchData)
}
function handlerResetData(searchData: any) {
  userContentRef.value?.exportFunResetData(searchData)
}
</script>

<style scoped>
.user {
  border-radius: 15px;
  overflow: hidden;
}
</style>
