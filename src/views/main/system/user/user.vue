<template>
  <div class="user">
    <user-search
      ref="userSearchRef"
      @search-data="handlerSearchData"
      @reset-data="handlerResetData"
    ></user-search>
    <user-content
      ref="userContentRef"
      @add-click="handlerAddClick"
      @edit-click="handlerEditClick"
    ></user-content>
    <user-dialog
      ref="userDialogRef"
      @refresh-table="handlerRefreshTable"
    ></user-dialog>
  </div>
</template>

<script setup lang="ts" name="user">
import UserSearch from './c-cpn/user-search.vue'
import UserContent from './c-cpn/user-content.vue'
import UserDialog from './c-cpn/user-dialog.vue'
import { ref } from 'vue'
const userContentRef = ref<InstanceType<typeof UserContent>>()
const userSearchRef = ref<InstanceType<typeof UserSearch>>()

function handlerSearchData(searchData: any) {
  userContentRef.value?.exportFunChangeParams(searchData)
}
function handlerResetData(searchData: any) {
  userContentRef.value?.exportFunResetData(searchData)
}
const userDialogRef = ref<InstanceType<typeof UserDialog>>()
function handlerAddClick() {
  userDialogRef.value?.setDialogVisible(false)
}
function handlerEditClick(itemData: any) {
  userDialogRef.value?.setDialogVisible(true, itemData)
}
function handlerRefreshTable() {
  userSearchRef.value?.handlerRefresh()
}
</script>

<style scoped>
.user {
  border-radius: 15px;
  overflow: hidden;
}
</style>
