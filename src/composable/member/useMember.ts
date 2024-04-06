import { stopStuApi,deleteStuApi,resetPasswordApi } from "@/api/member"
import { FuncList } from "@/type/BaseType"
import { ElMessage } from "element-plus"
import useInstance from "@/hooks/useInstance"
export default function useMember(getList:FuncList){
    const {global} = useInstance()
    //停用
    const stopBtn = async(row:any)=>{
        let confirm = await global.$myconfirm('确定停用吗?')
        if(confirm){
            let res = await stopStuApi({
                sutId:row.sutId,
                status:'1'
            })
            if(res && res.code == 200){
                ElMessage.success(res.msg)
                getList()
            }
        }
    }
    //启用
    const startBtn = async(row:any)=>{
        let confirm = await global.$myconfirm('确定启用吗?')
        if(confirm){
            let res = await stopStuApi({
                sutId:row.sutId,
                status:'0'
            })
            if(res && res.code == 200){
                ElMessage.success(res.msg)
                getList()
            }
        }
    }
     //重置密码
     const resetPasswotdBtn = async(row:any)=>{
        let confirm = await global.$myconfirm('确定重置密码吗?重置之后密码为【666666】')
        if(confirm){
            let res = await resetPasswordApi({
                sutId:row.sutId,
                password:'666666'
            })
            if(res && res.code == 200){
                ElMessage.success(res.msg)
                getList()
            }
        }
     }
      //删除
    const deleteBtn = async(row:any)=>{
        let confirm = await global.$myconfirm('确定删除吗?')
        if(confirm){
            let res = await deleteStuApi(row.sutId)
            if(res && res.code == 200){
                ElMessage.success(res.msg)
                getList()
            }
        }
    }
    return{
        stopBtn,
        resetPasswotdBtn,
        deleteBtn,
        startBtn
    }
}