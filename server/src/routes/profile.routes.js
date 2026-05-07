const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');

// Profile endpoints
router.get('/', profileController.getProfile);
router.post('/', profileController.createProfile);
router.put('/:id', profileController.updateProfile);
router.delete('/:id', profileController.deleteProfile);
router.get('/summary', profileController.getProfileSummary);

module.exports = router;
