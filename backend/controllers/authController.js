const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = async(req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

const login = async(req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        const isPasswordCorrect = await bcrypt.compare(req.body.password,
            user.password);
        if (!isPasswordCorrect) {
            return res.status(400).send("Wrong Password");
        }
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(user);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports = { register, login };