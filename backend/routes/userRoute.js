const express = require("express");
const { registerUser,  logout, getUser, getLoginStatus, updateUser, updatePhoto, loginUser, registerUserC } = require("../controller/userController");
const { protect } = require("../middileware/authMiddileware");
const router = express.Router();

router.post("/register",registerUser);
router.post("/registerc",registerUserC);
router.post("/login",loginUser);
router.get("/logout",logout);
router.get("/getUser",protect,getUser);
router.get("/getLoginStatus",getLoginStatus);
router.patch("/updateUser",protect,updateUser);
router.patch("/updatePhoto",protect,updatePhoto);


module.exports = router;