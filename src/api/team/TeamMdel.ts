//表格查询参数
export type TeamType = {
    id:string,
    categoryId:string,
    name:string,
    image:string,
    details:string,
    hasTop:string
}
//列表查询的参数类型
export type PageList = {
    currentPage:number,
    pageSize:number,
    name:string
}
//列表查询的参数类型
export type MemberList = {
    currentPage:number,
    pageSize:number,
    teamId:string,
    name:string,
    total:number
}