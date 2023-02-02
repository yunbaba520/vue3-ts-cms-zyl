<template>
  <div class="user">
    <user-search></user-search>
    <user-content></user-content>
  </div>
</template>

<script setup lang="ts" name="user">
import UserSearch from "./c-cpn/user-search.vue";
import UserContent from "./c-cpn/user-content.vue";
</script>

<style scoped>
.user {
  border-radius: 15px;
  overflow: hidden;
}
</style>
