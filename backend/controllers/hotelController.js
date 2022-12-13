const Hotel = require("../models/hotelModel");
const Room = require("../models/roomModel");

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
        res.status(500).json(error);
    }
};
const geAllHotel = async(req, res) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestprice: { $gt: min | 1, $lt: max || 999 },
        }).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(error);
    }
}

const countByCity = async(req, res) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city });
            })
        );
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json(error);
    }
};

const countByType = async(req, res) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });

        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
        ]);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getHotelRooms = async(req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return Room.findById(room);
            })
        );
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { hotels, hotelUpdate, hotelDelete, getHotel, geAllHotel, countByCity, countByType, getHotelRooms }