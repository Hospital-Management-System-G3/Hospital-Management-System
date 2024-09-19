const express = require("express");
const router = express.Router();
const userController = require("./../Controllers/userController");
const  auth = require('./../middleware/auth');


router.post("/register/user", userController.registerUser);
router.post("/login/user", userController.loginUser);


router.post('/logout', (req, res) => {
    res.clearCookie('token'); 
    res.status(200).json({ message: 'Logged out successfully' });
  });

  
module.exports = router;
