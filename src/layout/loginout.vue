<template>
  <el-dropdown style="padding: 0px 20px; cursor: pointer; border: none">
    <span class="el-dropdown-link">
      <img class="userimg" src="data:image/jpeg;base64,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" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="updatePassword">密码修改</el-dropdown-item>
        <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 修改密码的弹框 -->
  <SysDialog
  :title="dialog.title"
  :visible="dialog.visible"
  :height="dialog.height"
  :width="dialog.width"
  @on-close="onClose"
  @on-confirm="commit"
  >
    <template v-slot:content>
      <el-form :model="parm" ref="formRef" :rules="rules" label-width="80px" :inline="false" size="default">
        <el-form-item prop="oldPassword" label="原密码">
          <el-input v-model="parm.oldPassword"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword" label="新密码">
          <el-input v-model="parm.newPassword"></el-input>
        </el-form-item>
      </el-form>
      
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useInstance from '@/hooks/useInstance';
import SysDialog from '@/components/SysDialog.vue';
import useDialog from '@/hooks/useDialog';
import { reactive, ref } from 'vue';
import { FormInstance } from 'element-plus';
import { userStore } from '@/store/user';
import {updatePasswordApi} from '@/api/user/index'
//获取store
const store = userStore()
const formRef = ref<FormInstance>()
//弹框组件属性
const {dialog,onClose,onConfirm,onShow} = useDialog()
//获取router
const router = useRouter()
//获取全局属性
const {global} = useInstance()
const loginOut = async() => {
    let confirm = await global.$myconfirm('确定退出登录吗?')
    if(confirm){
        //清空缓存数据
        sessionStorage.clear()
        //跳转到登录页面
        router.push({name:'login'})
    }
};
const updatePassword = ()=>{
  //设置弹框属性
  dialog.height = 150;
  dialog.title = '修改密码'
  //显示弹框
  onShow()
}
//修改密码的对象
const parm = reactive({
  userId:store.userId,
  oldPassword:'',
  newPassword:''
})
//表单验证规则
const rules = reactive({
  oldPassword:[{ required: true, message: '请输入原密码', trigger: 'blur' }],
  newPassword:[{ required: true, message: '请输入新密码', trigger: 'blur' }],
})
//提交修改
const commit = ()=>{
  formRef.value?.validate(async(valid)=>{
    if(valid){
      //提交修改
      console.log(parm)
      let res = await updatePasswordApi(parm)
      if(res && res.code == 200){
        //清空缓存数据
        sessionStorage.clear()
        //跳转到登录页面
        router.push({name:'login'})
      }
    }
  })
}
</script>

<style scoped>
.userimg {
  height: 38px;
  width: 38px;
  border-radius: 50%;
  border: none;
}
</style>
