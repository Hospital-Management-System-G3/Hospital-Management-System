const express = require('express');
const { getDoctorAvailabilities, bookAvailability } = require('../controllers/doctorController.js');
const router = express.Router();

// Fetch available times for a specific doctor
router.get('/:doctorId/availabilities', getDoctorAvailabilities);

// Book an availability
router.post('/book', bookAvailability);

module.exports = router;
