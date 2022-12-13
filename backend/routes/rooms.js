const express = require("express");
const { createRoom, roomUpdate, roomDelete, getRoom, getAllRoom, updateRoomAvailability } = require("../controllers/roomController");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();


router.post("/:hotelid", createRoom).get("/:id", getRoom).get("/", getAllRoom);
router.put("/:id", verifyAdmin, roomUpdate).put("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hotelid", verifyAdmin, roomDelete);



module.exports = router;