const express = require('express');
const router = express.Router();
const { getDoctorsAndNurses } = require('../Controllers/CatalogUserController');

// Define the route to fetch doctor and nurse data
router.get('/doctors-nurses', getDoctorsAndNurses);

module.exports = router;
