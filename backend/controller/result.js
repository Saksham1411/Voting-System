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

    await Result.add({ declareResult: true, partyName: dataset.partyName, voteCount: dataset.voteCount });
    res.status(StatusCodes.CREATED).send('successfully added');
}
const getResult = async (req, res) => {
    const result = await Result.find({});
    
    if(result.declareResult === false){
        return res.status(StatusCodes.ACCEPTED).send({msg:'Result is not Declared yet'});
    }

    return res.status(StatusCodes.OK).send(result);
}

module.exports = { getResult, addResult };