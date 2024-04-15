const Candidate = require('../models/Candidate');
const { differenceInYears } = require("date-fns");
const { StatusCodes } = require('http-status-codes');


const addCandidate = async (req, res) => {
    const { name, DOB, nationality, partyName, partyLogo } = req.body;

    if (differenceInYears(Date.now(), DOB) <= 35) {
        return res.status(StatusCodes.BAD_REQUEST).send('candidate age is less than 35');
    }

    const candidate = await Candidate.create({ name, DOB, nationality, partyLogo, partyLogo });

    res.status(StatusCodes.CREATED).send('candidate added');
}
const getAllCandidates = async (req, res) => {

    const candidates = await Candidate.find({});

    res.status(StatusCodes.OK).send(candidates);

}
const updateCandidate = async (req, res) => {

}
const deleteCandidate = async (req, res) => {

}
const addVote = async (req, res) => {

}
const result = async (req, res) => {

}

module.exports = { addCandidate, getAllCandidates, updateCandidate, deleteCandidate, addVote, result };