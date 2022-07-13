import requests from './request'
//获取 浏览量 接口
export  const reqbrowsed=()=>requests({url:'/browsed',method:'get'})
export  const reqartbrowsed=()=>requests({url:'/artbrowsed',method:'get'})
//获取 实用工具 数据接口
export  const reqgetToolsDetail=()=>requests({url:'/gettools',method:'get'})
//获取 其他分类 数据接口
export  const reqgetComponentGallery=()=>requests({url:'/getComponentCallerys',method:'get'})
//获取 界面设计 数据接口
export  const reqgetViewDesign=()=>requests({url:'/getViewDesign',method:'get'})
//点赞修改点赞数 接口(传的是query参数)
// export  const reqChangeLiked=(id)=>requests({url:`/ChangeLiked/${id}`,method:'post'})
export  const reqChangeLiked=(_id,id)=>requests({url:`/ChangeLiked/?_id=${_id}&&id=${id}`,method:'post'})



