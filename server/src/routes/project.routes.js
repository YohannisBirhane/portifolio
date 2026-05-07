const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

// Project endpoints
router.get('/', projectController.getAllProjects);
router.post('/', projectController.createProject);
router.get('/:id', projectController.getProjectById);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);
router.post('/:id/tags', projectController.addProjectTag);
router.get('/:id/tags', projectController.getProjectTags);

module.exports = router;
