<template>
    <div class="mylogo">
        <!-- <img class="logo" :src="logo" /> -->
        <!-- <img v-if="show" class="title" :src="title" /> -->
        <span class="title">社团管理系统</span>
    </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png'
import title from '@/assets/title.png'
import { menuStore } from "@/store/menu";
import { computed, ref, watch } from 'vue';
const store = menuStore();
// const show = computed(()=>{
//     return store.getCollapse
// })
const show = ref(true)
watch(
    ()=>store.getCollapse,
    (collapsed:boolean)=>{
        if(!collapsed){
            setTimeout(() => {
                show.value = !collapsed;
            }, 300);
        }else{
            show.value = !collapsed;
        }
    }
)
</script>

<style scoped lang="scss">
.mylogo{
    height: 60px;
    background-color: white;
    color: #FFF;
    display: flex;
    align-items: center;
    .logo{
        height: 40px;
        width: 40px;
        margin-left: 10px;
        margin-right: 5px;
    }
    .title{
        font-size: 24px;
        color: gray;
        font-weight: bold;
        font-family: 'Times New Roman', Times, serif;
        text-shadow: 0px 5px 10px black;
        margin-left: 18px;
    }
}
</style>