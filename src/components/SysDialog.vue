<template>
   <el-dialog
      :title="title"
      :model-value="visible"
      :before-close="onClose"
      :destory-on-close="true"
      append-to-body
      :width="width + 'px'"
      :close-on-click-modal="false"
    >
      <div class="container" :style="{ height: height + 'px' }">
        <!-- 内容展示到插槽里面 -->
        <slot name="content"></slot>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="onClose">取消</el-button>
          <el-button type="primary" @click="onConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
</template>

<script setup lang="ts">
//定义弹框属性的数据类型
interface DialogProps{ //接口通常用来定义数据类型
    title:string, //标题
    visible:boolean, //控制弹框的显示和影藏
    width?:number, //问号：改字段不是必须的
    height?:number
}
//接收父组件传递过来的值
const props = withDefaults(defineProps<DialogProps>(),{
    title:'标题',
    visible:false,
    height:280,
    width:630
})
const emit = defineEmits(['onClose','onConfirm'])
//弹框关闭
const onClose = ()=>{
    emit('onClose')
}
//弹框确定
const onConfirm = ()=>{
    emit('onConfirm')
}
</script>

<style lang="scss" scope>
  .container {
    overflow-x: initial;
    overflow-y: auto;
  }
  .el-dialog {
    border-top-left-radius: 7px !important;
    border-top-right-radius: 7px !important;
    .el-dialog__header {
      margin-right: 0px;
      border-top-left-radius: 7px !important;
      border-top-right-radius: 7px !important;
      background-color: #17223b !important;
      .el-dialog__title {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .el-dialog__headerbtn {
      .el-dialog__close {
        color: #fff;
      }
    }
    .el-dialog__body {
      padding: 10px;
    }
    .el-dialog__footer {
      border-top: 1px solid #e8eaec !important;
      padding: 10px;
    }
  }
  </style>
