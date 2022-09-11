const mongoose = require('mongoose');


const userinformation = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    year:{
        type:Number,

    },
    month:{
        type:String
    },
    Rent:{
        type:Number,
        default:4100
        
    },
    previousDue:{
        type:Number
    },
    electricUnit:{
        type:Number
    },
    totle:{
        type:Number
    },
    deposit:{
        type:Number
    },
    nextMonthDue:{
        type:Number,

    },
    isdeposit:{
        type:Boolean,
        default:false
    }

});

const TenantData = mongoose.model("TenantData",userinformation);
module.exports = TenantData;