const mongoose = require("mongoose");

const hotelModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    pics: {
        type: [String],
    },
    hoteldesc: {
        type: String,
        required: true,
    },
    hotelrating: {
        type: Number,
        min: 0,
        max: 5,
    },
    rooms: {
        type: [String],

    },
    cheapestprice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    }
})

const Hotel = mongoose.model("Hotel", hotelModel);
module.exports = Hotel