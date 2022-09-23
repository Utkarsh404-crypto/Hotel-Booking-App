const User = require("../models/userModel");

const userUpdate = async(req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json(error)
    }


}
const userDelete = async(req, res) => {
    try {
        const updateUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted");
    } catch (error) {
        res.status(500).json(error)
    }

}

const getUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
}

const geAllUser = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { userUpdate, userDelete, getUser, geAllUser }