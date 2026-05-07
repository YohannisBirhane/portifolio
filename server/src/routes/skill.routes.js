const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skill.controller');

// Skill endpoints
router.get('/', skillController.getAllSkills);
router.post('/', skillController.createSkill);
router.get('/:id', skillController.getSkillById);
router.put('/:id', skillController.updateSkill);
router.delete('/:id', skillController.deleteSkill);
router.get('/category/:category', skillController.getSkillsByCategory);

module.exports = router;
