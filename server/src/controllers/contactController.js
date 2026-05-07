const db = require('../config/db');
const { sendEmailNotification } = require('../services/email.service');

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save message to database
    const result = await db.query(
      'INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );

    // Send email notification
    const emailResult = await sendEmailNotification({ name, email, message });

    return res.status(201).json({
      success: true,
      message: 'Message received successfully!',
      data: result.rows[0],
      emailSent: emailResult.success,
    });
  } catch (error) {
    console.error('Error processing message:', error.message);
    return res.status(500).json({ error: 'Internal server error while processing message' });
  }
};
