<template>
  <el-breadcrumb class="bred" separator="/">
    <el-breadcrumb-item v-for="item in tabs">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import {Ref, ref, watch,onMounted} from 'vue'
import { RouteLocationMatched, useRoute } from 'vue-router';
//获取当前路由
const route = useRoute()
//定义面包屑导航的数据类型
//Ref:定义类型  ref:定义响应式数据
const tabs:Ref<RouteLocationMatched[]> = ref([])
watch(
    ()=>route.path,
    ()=>getBredcrumb()
)
//获取面包屑导航的数据
const getBredcrumb = ()=>{
    let mached = route.matched.filter((item)=>item.meta && item.meta.title);
    const first = mached[0]
    if(first.path !== '/home'){//构造面包屑导航第一个数据
        mached = [{path:'/home',meta:{title:'首页'}} as any].concat(mached)
    }
    tabs.value = mached
}
onMounted(()=>{
      getBredcrumb()
  })
</script>
<style scoped lang="scss">
//修改字体颜色
:deep(.el-breadcrumb__inner) {
  color: gray !important;
}
.bred {
  margin-left: 10px;
}
// 修改字体大小
:deep(.el-breadcrumb__item) {
  font-size: 15px !important;
}
</style>
