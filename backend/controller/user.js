const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    const { name, DOB, phoneNumber, aadharNumber, password, nationality } = req.body;

    const salt = bcrypt.genSaltSync(8);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = await User.create({ name, DOB, phoneNumber, aadharNumber, password: hashPassword, nationality });
    res.status(StatusCodes.CREATED).send(user);
}

const login = async (req, res) => {
    const { aadharNumber, password } = req.body;

    if (!aadharNumber || !password) {
        return res.status(StatusCodes.BAD_REQUEST).send('Fields are empty');
    }

    const user = await User.findOne({ aadharNumber });
    if (!user) return res.status(StatusCodes.UNAUTHORIZED).send('User Not Found');

    const isMatched = bcrypt.compareSync(password, user.password);
    if (!isMatched) return res.status(StatusCodes.UNAUTHORIZED).send('Password not match');

    const token = jwt.sign({ userId: user._id, name: user.name, role: user.role }, process.env.JWT_SECRET);

    return res.cookie("token", token, { sameSite: 'none', secure: true }).status(201).json({ userId: user._id, name: user.name, role: user.role, votingStatus: user.votingStatus });
}

const profile = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(500).send('token not find');

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: payload.userId });
    res.status(StatusCodes.OK).json({ userId: user._id, name: user.name, role: user.role, votingStatus: user.votingStatus });
}

const logout = async (req, res) => {
    res.clearCookie("token").status(200).send('logout');
}

module.exports = { register, login, logout, profile };