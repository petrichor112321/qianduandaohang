const mongoose=require("mongoose")
 //1.创建约束
 var Schema = mongoose.Schema
 const schema = new Schema({
    UserName:{
      type:String,
      unique:true
    },
    Passwd:{
      type:String,
      set(val){
         return require('bcryptjs').hashSync(val,10)
     }
    },
    Role:String
 });
 //2.创建集合
 var usersmodel = mongoose.model("users", schema);
 //将集合暴露出去，对文档操作
module.exports=usersmodel