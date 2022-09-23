const express = require("express");
const { createRoom, roomUpdate, roomDelete, getRoom, getAllRoom } = require("../controllers/roomController");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();


router.post("/:hotelid", verifyAdmin, createRoom).get("/:id", getRoom).get("/", getAllRoom);
router.put("/:id", verifyAdmin, roomUpdate);
router.delete("/:id/:hotelid", verifyAdmin, roomDelete);



module.exports = router;