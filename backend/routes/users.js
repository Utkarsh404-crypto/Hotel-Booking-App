const express = require("express");
const { userUpdate, userDelete, getUser, geAllUser } = require("../controllers/userController");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in");
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you can delete your account");
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you can delete all accounts");
// })

router.get("/:id", verifyUser, getUser).get("/", verifyAdmin, geAllUser);
router.put("/:id", verifyUser, userUpdate);
router.delete("/:id", verifyUser, userDelete);



module.exports = router;