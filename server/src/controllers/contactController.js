const db = require('../config/db');

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO messages (name, email, message) VALUES (\, \, \) RETURNING *',
      [name, email, message]
    );

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error saving message:', error.message);
    return res.status(500).json({ error: 'Internal server error while saving message' });
  }
};
