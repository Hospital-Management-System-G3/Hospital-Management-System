const express = require("express");
const router = express.Router();
const recordController = require("../Controllers/recordController");


router.get("/getRecord", recordController.getRecord);

module.exports = router;