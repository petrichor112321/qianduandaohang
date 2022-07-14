const mongoose=require("mongoose")
//连接数据库
mongoose.connect("mongodb://112.126.66.32/Sources")
mongoose.connection.once("open", function() {
        console.log("数据库连接成功")
    })