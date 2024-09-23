const express = require("express");
const router = express.Router();
const userController = require("./../Controllers/userController");
const  auth = require('./../middleware/auth');
const { getUserDetails } = require('../Controllers/UserDetailController');


router.post("/register/user", userController.registerUser);
router.post("/login/user", userController.loginUser);

router.get("/user/:username", getUserDetails);

router.post('/logout', (req, res) => {
    res.clearCookie('token'); 
    res.status(200).json({ message: 'Logged out successfully' });
  });

  
module.exports = router;
