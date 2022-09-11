const mongoose = require("mongoose")

const users = new mongoose.Schema({
   email:{
    type:String,

   },
   roomid:{
    type:String,
    unique:true
    
   },
   roomidPassword:{
    type:String

   },
   isAdmin:{
    type:Boolean,
    default:false
   }




})

const MyTenant = mongoose.model("MyTenant",users)
module.exports= MyTenant