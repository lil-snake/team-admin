//引入store
import { defineStore } from "pinia";
//定义一个自己的store
export const menuStore = defineStore('menuStore', {
    //存储数据地方，存储count
    state: () => ({ 
        isCollapse: false 
    }),
    //获取state里面的数据
    getters: {
        getCollapse(state){
            return state.isCollapse
        }
    },
    //操作state里面的数据
    actions: {
        setCollapse() {
            this.isCollapse = !this.isCollapse
        }
    }
})