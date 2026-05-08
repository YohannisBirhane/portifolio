const Education = require('../models/education.model');

exports.getAllEducation = async (req, res) => {
  try {
    const education = await Education.getAllEducation();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEducationSummary = async (req, res) => {
  try {
    const education = await Education.getLatestEducation();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEducation = async (req, res) => {
  try {
    const { institution, department, year_level, description } = req.body;
    if (!institution || !department || !year_level) {
      return res.status(400).json({ message: 'Institution, department, and year level are required' });
    }
    const education = await Education.createEducation({ institution, department, year_level, description });
    res.status(201).json({ message: 'Education entry created successfully', education });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.updateEducation(id, req.body);
    res.json({ message: 'Education entry updated successfully', education });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    await Education.deleteEducation(id);
    res.json({ message: 'Education entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};