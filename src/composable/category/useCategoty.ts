import { CategoryModel } from "@/api/category/CategoryModel";
import { EditType, FuncList } from "@/type/BaseType";
import { ref } from "vue"
import useInstance from "@/hooks/useInstance";
import { deleteCategoryApi } from "@/api/category";
import { ElMessage } from "element-plus";
export default function useCategoty(getList:FuncList){
    const {global} = useInstance()
    //弹框属性
    const addFormRef = ref<{show:(type:string,row?:CategoryModel)=>void}>();
    //新增
    const addBtn = ()=>{
        addFormRef.value?.show(EditType.ADD)
    }
    //编辑
    const editBtn = (row:CategoryModel)=>{
        addFormRef.value?.show(EditType.EDIT,row)
    }
    //删除
    const deleteBtn = async(row:CategoryModel)=>{
        const confirm = await global.$myconfirm('确定删除该数据吗?')
        if(confirm){
            let res = await deleteCategoryApi(row)
            if(res && res.code == 200){
                //信息提示
                ElMessage.success(res.msg)
                //刷新列表
                getList()
            }
        }
    }
    return{
        addBtn,
        editBtn,
        deleteBtn,
        addFormRef
    }
}