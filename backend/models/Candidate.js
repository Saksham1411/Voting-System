const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    DOB:{
        type:Date,
    },
    nationality:{
        type:String,
        default:"India"
    },
    partyName:{
        type:String,
        unique:true,
    },
    partyLogo:{
        type:String,
    },
    voteCount:{
        type:Number,
        default:0,
    }
    
},{timestamps:true});

module.exports = mongoose.model("Candidate",candidateSchema);