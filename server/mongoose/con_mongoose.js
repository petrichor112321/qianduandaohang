const mongoose=require("mongoose")
//连接数据库
mongoose.connect("mongodb://customer:091888@112.126.66.32/Sources")
// mongoose.connect("mongodb://customer:091888sj@localhost:27017/Sources")
mongoose.connection.once("open", function() {
        console.log("数据库连接成功")
    })