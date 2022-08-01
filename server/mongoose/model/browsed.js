const mongoose=require("mongoose")
 //1.创建约束
 var Schema = mongoose.Schema
 const schema = new Schema({
     browsed: Number,
     artbrowsed:Number
 });
 //2.创建集合
 var browsemodel = mongoose.model("browsed", schema);

module.exports=browsemodel