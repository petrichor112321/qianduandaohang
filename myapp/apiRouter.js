const express=require('express')
//调用router函数
const router=express.Router()
//创建约束及集合
const browsemodel=require('./mongoose/model/browsed')
const Sourcesmodel=require('./mongoose/model/Sources')
const ViewDesignmodel=require('./mongoose/model/ViewDesign')
const Componentmodel=require('./mongoose/model/Tools')
//在这里挂载对应的路由

//1.get请求
//首页返回 实用工具 数据
router.get('/gettools',(req,res)=>{
    //通过req.query获取客户端传递的查询字符串发送到服务器的数据
    //响应处理结果
Sourcesmodel.find({},function(err,docs){
    if(!err){
        console.log('查询成功');
        res.send({
        code:200,
        msg:'GET请求MongoDB成功！',
        data:[docs],
    })
    }
  
})
})
router.get('/browsed',(req,res)=>{
    browsemodel.findById("628469a1c3d71bba39b61060",function(err,doc){
        //每次查询数据库最新数据
        let browsed=doc.browsed
        doc.updateOne({$set:{browsed:browsed+1}},function(err){
            if(!err){
                console.log('浏览量加一'); 
                res.send({
                    code:200,
                    browsed:browsed
                })
            }
    })
});
})
router.get('/artbrowsed',(req,res)=>{
    browsemodel.findById("628469a1c3d71bba39b61060",function(err,doc){
        //每次查询数据库最新数据
        let artbrowsed=doc.artbrowsed
        doc.updateOne({$set:{artbrowsed:artbrowsed+1}},function(err){
            if(!err){
                console.log('文章浏览量加一'); 
                res.send({
                    code:200,
                    artbrowsed:artbrowsed
                })
            }
    })
});
})
router.get('/getComponentCallerys',(req,res)=>{
    //1.过滤方法实现按参数查询
    // var id = url.parse(req.url, true).query.id; //id表示接收的变量
    // //根据id不同 返回的数据不同——过滤
    // //filter方法用于过滤数组成员 满足条件的成员组成一个新的数组返回
    // res.send(list.filter(function(item) {
    //     return (item && item.id == id);
    // }));
    Componentmodel.find({},function(err,docs){
        if(!err){
            res.send({
                    code:200,
                    msg:'GET请求MongoDB成功！',
                    data:[docs]
                    })
            }
      
    })
});
router.get('/getViewDesign',(req,res)=>{
    //通过req.query获取客户端传递的查询字符串发送到服务器的数据
    //响应处理结果
    ViewDesignmodel.find({},function(err,docs){
        if(!err){
            console.log('查询成功');
            res.send({
            code:200,
            msg:'GET请求MongoDB成功！',
            data:[docs]
        })
        }
      
    })
   
});

//2.post请求
router.post('/ChangeLiked',(req,res)=>{
    let _id=req.query._id
    let id=req.query.id
//通过请求体
console.log(req.query);
if(id>=1 &&id<=13){
    Sourcesmodel.findById(_id,function(err,doc){
    let likes=doc.liked
    if(!err){
        //点赞加1操作
        doc.updateOne({$set:{liked:likes+1}},function(){
            console.log('修改成功');
        })
         }
    })
}else if(id>=12&&id<=23){
    Componentmodel.findById(_id,function(err,doc){
        let likes=doc.liked
        if(!err){
            //点赞加1操作
            doc.updateOne({$set:{liked:likes+1}},function(){
                console.log('修改成功');
            })
             }
    })
}else{
    ViewDesignmodel.findById(_id,function(err,doc){
        let likes=doc.liked
        if(!err){
            //点赞加1操作
            doc.updateOne({$set:{liked:likes+1}},function(){
                console.log('修改成功');
            })
             }
    })
}

  
    res.send({
        code:200,
        msg:'POST请求成功!',
    })
})



//向外暴露提供使用
module.exports=router