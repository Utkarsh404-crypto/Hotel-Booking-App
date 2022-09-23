const Hotel = require("../models/hotelModel");

const hotels = async(req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch (error) {
        res.status(500).json(error);
    }
}

const hotelUpdate = async(req, res) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateHotel);
    } catch (error) {
        res.status(500).json(error)
    }


}

const hotelDelete = async(req, res) => {
    try {
        const updateHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel deleted");
    } catch (error) {
        res.status(500).json(error)
    }

}

const getHotel = async(req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json(error)
    }
}

const geAllHotel = async(req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { hotels, hotelUpdate, hotelDelete, getHotel, geAllHotel }