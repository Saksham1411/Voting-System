const Candidate = require('../models/Candidate');
const Result = require('../models/Result');
const { StatusCodes } = require('http-status-codes');


const addResult = async (req, res) => {
    const candidate = await Candidate.find({});

    const dataset = { partyName: [], voteCount: [] };
    candidate.forEach(cand => {
        dataset.partyName.push(cand.partyName);
        dataset.voteCount.push(cand.voteCount);
    })
    await Result.deleteMany();
    await Result.create({ declareResult: true, partyName: dataset.partyName, voteCount: dataset.voteCount });
    res.status(StatusCodes.CREATED).send('successfully added');
}
const getResult = async (req, res) => {
    const result = await Result.find({});
    console.log(result);
    
    if(result.length===0 || !result[0].declareResult){
        return res.status(StatusCodes.BAD_REQUEST).send('Result is not declared yet');
    }

    return res.status(StatusCodes.OK).send(result);
}

module.exports = { getResult, addResult };