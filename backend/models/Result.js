const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    declareResult:{
        type:Boolean,
        default:false
    },
    partyName:[String],
    voteCount:[Number]
})

module.exports = mongoose.model('Result',resultSchema);