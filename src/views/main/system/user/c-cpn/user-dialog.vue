<template>
  <div class="user-dialog">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%">
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="formData.realname" placeholder="请输入真实姓名" />
          </el-form-item>
          <el-form-item label="登录密码" prop="password">
            <el-input v-model="formData.password" placeholder="请输入登录密码" />
          </el-form-item>
          <el-form-item label="手机号码" prop="cellphone">
            <el-input v-model="formData.cellphone" placeholder="请输入手机号码" />
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select v-model="formData.roleId" placeholder="请选择角色" style="width: 100%">
              <template v-for="item in roleList" :key="item.id">
                <el-option :value="item.id" :label="item.name" />
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="deparmentId">
            <el-select v-model="formData.departmentId" placeholder="请选择部门" style="width: 100%">
              <template v-for="item in departmentList" :key="item.id">
                <el-option :value="item.id" :label="item.name" />
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handlerSubmit">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref ,reactive} from 'vue'
import useDepartment from "@/stores/main/system/department";
import useRole from "@/stores/main/system/role";
import useUser from "@/stores/main/system/user";
import { storeToRefs } from 'pinia';
import { ElMessage } from 'element-plus';
const departmentStore = useDepartment()
const roleStore = useRole()
const userStore = useUser()
const emit = defineEmits(["refreshTable"])
// 定义数据绑定
const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})
// 部门，角色列表
const {departmentList} = storeToRefs(departmentStore)
const {roleList} = storeToRefs(roleStore)
// 显示/隐藏
let dialogVisible = ref<boolean>(false)
function setDialogVisible(isVisible: boolean) {
  dialogVisible.value = isVisible
}
// 提交
async function handlerSubmit() {
  console.log(formData);
  // 验证后提交
  const res = await userStore.addUserAction(formData)
  console.log(res);
  ElMessage.success(res.data)
  // 表格刷新
  emit('refreshTable')
  dialogVisible.value = false
}
defineExpose({
  setDialogVisible
})
</script>

<style scoped lang="user-dialog"></style>
