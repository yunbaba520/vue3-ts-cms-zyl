<template>
  <div class="user-dialog">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%">
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let dialogVisible = ref<boolean>(false)
function setDialogVisible(isVisible: boolean) {
  dialogVisible.value = isVisible
}
defineExpose({
  setDialogVisible
})
</script>

<style scoped lang="user-dialog"></style>
