const express = require("express");
const { hotels, hotelUpdate, hotelDelete, getHotel, geAllHotel } = require("../controllers/hotelController");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();


router.post("/", verifyAdmin, hotels).get("/:id", getHotel).get("/", geAllHotel);
router.put("/:id", verifyAdmin, hotelUpdate);
router.delete("/:id", verifyAdmin, hotelDelete);



module.exports = router;