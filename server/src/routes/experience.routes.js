const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experience.controller');

// Experience endpoints
router.get('/', experienceController.getAllExperience);
router.post('/', experienceController.createExperience);
router.get('/:id', experienceController.getExperienceById);
router.put('/:id', experienceController.updateExperience);
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;
