const express = require('express');
const { getDoctorsAndNurses } = require('../Controllers/CatalogUserControllerHusban');
const { getUserDetails } = require('../Controllers/UserDetailControllerHusban');

const router = express.Router();
 
// Define the route to fetch doctor and nurse data
router.get('/doctors-nurses', getDoctorsAndNurses);
router.get("/user/:username", getUserDetails);

module.exports = router;



