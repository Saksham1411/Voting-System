const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    DOB:{
        type:Date,
    },
    phoneNumber:{
        type:Number,
    },
    aadharNumber:{
        type:Number,
    },
    password:{
        type:String,
    },
    nationality:{
        type:String,
    },
    votingStatus:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER",
    }
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);