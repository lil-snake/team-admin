import { User } from '@/api/user/UserModel';
import { EditType, FuncList } from '@/type/BaseType';
import { ref } from 'vue';
import useInstance from '@/hooks/useInstance';
import { deleteUserApi } from '@/api/user';
import { ElMessage } from 'element-plus';
export default function useUser(getList:FuncList) {
    //获取全局属性
    const {global} = useInstance()
    //弹框的ref属性
    const addUserRef = ref<{ show: (type:string,row?:User) => void }>();
    const assignRef = ref<{ show: (userId:string,nickName:string) => void }>();
    //新增
    const addBtn = () => {
        addUserRef.value?.show(EditType.ADD)
    }
    //编辑
    const editBtn = (row:User) => {
        //显示弹框
        addUserRef.value?.show(EditType.EDIT,row)
    }
    //分配菜单树
    const assignBtn = (row:User)=>{
        console.log(row)
        assignRef.value?.show(row.userId,row.nickName)
    }
    //删除
    const deleteBtn = async(row:User) => {
        //信息提示
        console.log(global)
        const confirm = await global.$myconfirm('确定删除该数据吗?')
        console.log(confirm)
        if(confirm){
            let res = await deleteUserApi(row)
            if(res && res.code == 200){
                //信息提示
                ElMessage.success(res.msg)
                //刷新表格
                getList()
            }
        }
    }
    return {
        addBtn,
        editBtn,
        deleteBtn,
        addUserRef,
        assignBtn,
        assignRef
    }
}