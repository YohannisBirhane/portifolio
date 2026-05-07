const Skill = require('../models/skill.model');

exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.getAllSkills();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSkill = async (req, res) => {
  try {
    const { name, category, level } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Skill name is required' });
    }
    const skill = await Skill.createSkill(name, category, level);
    res.status(201).json({ message: 'Skill created successfully', skill });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSkillById = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await Skill.getSkillById(id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await Skill.updateSkill(id, req.body);
    res.json({ message: 'Skill updated successfully', skill });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    await Skill.deleteSkill(id);
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSkillsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const skills = await Skill.getSkillsByCategory(category);
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
