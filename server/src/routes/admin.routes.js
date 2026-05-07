const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { adminAuth } = require('../middleware/admin.middleware');
const projectController = require('../controllers/project.controller');
const skillController = require('../controllers/skill.controller');
const profileController = require('../controllers/profile.controller');
const messageController = require('../controllers/message.controller');
const experienceController = require('../controllers/experience.controller');

// Admin authentication (no auth required)
router.post('/login', adminController.adminLogin);
router.post('/logout', adminController.adminLogout);

// Verify admin token (auth required)
router.get('/verify', adminAuth, adminController.verifyAdmin);

// Admin project management (auth required)
router.get('/projects', adminAuth, projectController.getAllProjects);
router.post('/projects', adminAuth, projectController.createProject);
router.put('/projects/:id', adminAuth, projectController.updateProject);
router.delete('/projects/:id', adminAuth, projectController.deleteProject);

// Admin skill management (auth required)
router.get('/skills', adminAuth, skillController.getAllSkills);
router.post('/skills', adminAuth, skillController.createSkill);
router.put('/skills/:id', adminAuth, skillController.updateSkill);
router.delete('/skills/:id', adminAuth, skillController.deleteSkill);

// Admin profile management (auth required)
router.get('/profile', adminAuth, profileController.getProfile);
router.post('/profile', adminAuth, profileController.createProfile);
router.put('/profile/:id', adminAuth, profileController.updateProfile);

// Admin experience management (auth required)
router.get('/experience', adminAuth, experienceController.getAllExperience);
router.post('/experience', adminAuth, experienceController.createExperience);
router.put('/experience/:id', adminAuth, experienceController.updateExperience);
router.delete('/experience/:id', adminAuth, experienceController.deleteExperience);

// Admin message management (auth required)
router.get('/messages', adminAuth, messageController.getAllMessages);
router.delete('/messages/:id', adminAuth, messageController.deleteMessage);
router.patch('/messages/:id/read', adminAuth, messageController.markAsRead);

module.exports = router;
