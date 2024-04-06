//引入store
import { defineStore } from "pinia";
//定义一个自己的store
export const testStore = defineStore('testStore', {
    //存储数据地方，存储count
    state: () => ({ 
        count: 0 
    }),
    //获取state里面的数据
    getters: {
        getCount(state){
            return state.count
        }
    },
    //操作state里面的数据
    actions: {
        setCount(count:number) {
            this.count = count
        }
    }
})