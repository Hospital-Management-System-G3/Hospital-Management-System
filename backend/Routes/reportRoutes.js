const express = require('express');
const router = express.Router();
const reportController = require('../Controllers/reportController');
const auth = require('../middleware/auth');

router.post('/', auth, reportController.createReport);
router.get('/feedback/:feedbackId', reportController.getFeedbackReports);

module.exports = router;