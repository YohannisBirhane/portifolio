const Profile = require('../models/profile.model');

exports.getProfile = async (req, res) => {
  try {
    const profiles = await Profile.getAllProfiles();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProfile = async (req, res) => {
  try {
    const { full_name, title, bio, image, github, linkedin, email } = req.body;
    if (!full_name) {
      return res.status(400).json({ message: 'Full name is required' });
    }
    const profile = await Profile.createProfile({ full_name, title, bio, image, github, linkedin, email });
    res.status(201).json({ message: 'Profile created successfully', profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.updateProfile(id, req.body);
    res.json({ message: 'Profile updated successfully', profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    await Profile.deleteProfile(id);
    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProfileSummary = async (req, res) => {
  try {
    const profile = await Profile.getLatestProfile();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
