const Experience = require('../models/experience.model');

exports.getAllExperience = async (req, res) => {
  try {
    const experience = await Experience.getAllExperience();
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const { title, organization, start_date, end_date, description } = req.body;
    if (!title || !organization) {
      return res.status(400).json({ message: 'Title and organization are required' });
    }
    const experience = await Experience.createExperience(req.body);
    res.status(201).json({ message: 'Experience created successfully', experience });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExperienceById = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.getExperienceById(id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Experience.updateExperience(id, req.body);
    res.json({ message: 'Experience updated successfully', updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    await Experience.deleteExperience(id);
    res.json({ message: 'Experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
