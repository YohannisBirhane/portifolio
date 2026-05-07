const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

// Message endpoints
router.get('/', messageController.getAllMessages);
router.post('/', messageController.createMessage);
router.get('/:id', messageController.getMessageById);
router.put('/:id', messageController.updateMessage);
router.delete('/:id', messageController.deleteMessage);
router.patch('/:id/read', messageController.markAsRead);

module.exports = router;
