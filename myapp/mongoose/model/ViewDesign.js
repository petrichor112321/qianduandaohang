const mongoose=require("mongoose")
 //1.创建约束
 var Schema = mongoose.Schema
 const schema = new Schema({
     URL: String, // String is shorthand for {type: String}
     faviconUrl: String,
     uploadTime:String,
     soureceName:String,
     title:String,
     liked:Number
 });
 //2.创建集合
 var ViewDesignmodel = mongoose.model("viewdesign", schema);
 ViewDesignmodel.find({},function(err,docs){
     console.log('viewdesign查询成功');
 })
 //将集合暴露出去，对文档操作
module.exports=ViewDesignmodel