const express = require("express");
const { hotels, hotelUpdate, hotelDelete, getHotel, geAllHotel, countByCity, countByType, getHotelRooms } = require("../controllers/hotelController");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();


router.post("/", hotels).get("/find/:id", getHotel).get("/", geAllHotel).get("/countbycity", countByCity).get("/countbytype", countByType).get("/room/:id", getHotelRooms);
router.put("/:id", verifyAdmin, hotelUpdate);
router.delete("/:id", verifyAdmin, hotelDelete);



module.exports = router;