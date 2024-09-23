const express = require('express');
const router = express.Router();
const feedbackController = require('../Controllers/feedbackController');
const auth = require('../middleware/auth');

router.post('/', auth, feedbackController.createFeedback);
router.get('/doctor/:doctorId', feedbackController.getDoctorFeedbacks);

module.exports = router;
