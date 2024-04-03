const User = require('../models/User');
const bcrypt = require('bcryptjs');
const register = async(req,res)=>{
    const{ name,DOB,phoneNumber,aadharNumber,password,nationality } = req.body;
    const salt = bcrypt.genSaltSync(8);
    const hashPassword = bcrypt.hashSync(password,salt);
    const user = await User.create({name,DOB,phoneNumber,aadharNumber,password:hashPassword,nationality});
    res.send(user);
}

module.exports = {register};