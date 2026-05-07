const Project = require('../models/project.model');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.getAllProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, tech_stack, image, github_link, live_link } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }
    const project = await Project.createProject({ title, description, tech_stack, image, github_link, live_link });
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.getProjectById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.updateProject(id, req.body);
    res.json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.deleteProject(id);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addProjectTag = async (req, res) => {
  try {
    const { id } = req.params;
    const { tag_name } = req.body;
    if (!tag_name) {
      return res.status(400).json({ message: 'Tag name is required' });
    }
    await Project.addTag(id, tag_name);
    res.status(201).json({ message: 'Tag added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjectTags = async (req, res) => {
  try {
    const { id } = req.params;
    const tags = await Project.getTags(id);
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
