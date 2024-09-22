const express = require("express");
const router = express.Router();
const chatsController = require("../Controllers/chatsController");


router.get("/getChats",chatsController.getChats);
router.post("/addMessage",chatsController.addMessage);

module.exports = router;