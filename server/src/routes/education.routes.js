const express = require('express');
const router = express.Router();
const educationController = require('../controllers/education.controller');

router.get('/', educationController.getAllEducation);
router.get('/summary', educationController.getEducationSummary);

module.exports = router;