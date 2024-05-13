const Candidate = require('../models/Candidate');
const User = require('../models/User');
const { differenceInYears } = require("date-fns");
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');


const addCandidate = async (req, res) => {
    const { name, DOB, partyName, partyLogo } = req.body;

    if (differenceInYears(Date.now(), DOB) <= 35) {
        return res.status(StatusCodes.BAD_REQUEST).send('candidate age is less than 35');
    }

    const candidate = await Candidate.create({ name, DOB, partyName, partyLogo });
    console.log(candidate);
    res.status(StatusCodes.CREATED).send('candidate added');
}
const getAllCandidates = async (req, res) => {

    const candidates = await Candidate.find({});
    // console.log(candidates);
    res.status(StatusCodes.OK).send(candidates);

}
const updateCandidate = async (req, res) => {

}
const deleteCandidate = async (req, res) => {
    const { id } = req.params;
    await Candidate.findOneAndDelete({ _id: id });
    res.status(StatusCodes.ACCEPTED).send('Deleted');
}
const addVote = async (req, res) => {
    const { candId } = req.body;
    const { token } = req.cookies;
    if (!token) return res.status(StatusCodes.UNAUTHORIZED).send('Not Authorized');
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByIdAndUpdate({ _id: payload.userId }, { votingStatus: true });
    console.log(user);
    await Candidate.findByIdAndUpdate({ _id: candId }, { $inc: { voteCount: 1 } });

    const newToken = jwt.sign({ userId: user._id, name: user.name, role: user.role, votingStatus: true }, process.env.JWT_SECRET);

    res.cookie("token", newToken, { sameSite: 'none', secure: true }).status(StatusCodes.OK).json({ votingStatus: true });
}
const result = async (req, res) => {
    const candidate = await Candidate.find({});

    const dataset = { partyName: [], voteCount: [] };
    candidate.forEach(cand => {
        dataset.partyName.push(cand.partyName);
        dataset.voteCount.push(cand.voteCount);
    })

    res.status(StatusCodes.OK).send(dataset);
}

module.exports = { addCandidate, getAllCandidates, updateCandidate, deleteCandidate, addVote, result };