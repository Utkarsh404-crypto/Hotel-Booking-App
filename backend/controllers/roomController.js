const Room = require("../models/roomModel");
const Hotel = require("../models/hotelModel");

const createRoom = async(req, res) => {

    const hotelId = req.params.hotelid;

    const newRoom = new Room(req.body);

    try {
        const saveRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: saveRoom._id } })
        } catch (error) {
            res.status(500).send("Error creating room and updating in hotel");
        }
        res.status(200).json(saveRoom);
    } catch (error) {
        res.status(500).send("Error creating room");
    }
}


const roomUpdate = async(req, res) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateRoom);
    } catch (error) {
        res.status(500).json(error)
    }


}

const roomDelete = async(req, res) => {

    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })
        } catch (error) {
            res.status(500).send("Error deleting room and updating in hotel");
        }
        res.status(200).json("Room deleted");
    } catch (error) {
        res.status(500).json(error)
    }

}

const getRoom = async(req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllRoom = async(req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { createRoom, roomUpdate, roomDelete, getRoom, getAllRoom }