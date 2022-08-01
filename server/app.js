//引入express
const express = require('express')
//引入mongoose连接
const con_mongoose=require('./mongoose/index')
//2.创建实例对象app
const app=express()
const bodyParser=require('body-parser')
//后端解决跨域
var cors=require('cors')
app.use( cors ({
    "origin": "112.126.66.32",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
  }) )

//配置解析表单数据的中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//导入路由模块
const router=require('./apiRouter')
//把路由模块注册到app（router注册为全局中间件） 通过前缀/api可访问路由模块
app.use('/api',router)
//请求到来后进入到路由模块匹配路由

app.listen(6666,()=>{
    console.log('服务启动在http://112.126.66.32端口');
})