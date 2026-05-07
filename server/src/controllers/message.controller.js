const Message = require('../models/message.model');

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.getAllMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }
    const result = await Message.createMessage(name, email, message);
    res.status(201).json({ message: 'Message created successfully', result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.getMessageById(id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Message.updateMessage(id, req.body);
    res.json({ message: 'Message updated successfully', updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await Message.deleteMessage(id);
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await Message.markAsRead(id);
    res.json({ message: 'Message marked as read' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
