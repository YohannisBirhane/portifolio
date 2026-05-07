const db = require('../config/db');

class Message {
  static async getAllMessages() {
    const query = 'SELECT * FROM messages ORDER BY created_at DESC';
    const result = await db.query(query);
    return result.rows;
  }

  static async getMessageById(id) {
    const query = 'SELECT * FROM messages WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  static async createMessage(name, email, message) {
    const query = 'INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *';
    const result = await db.query(query, [name, email, message]);
    return result.rows[0];
  }

  static async updateMessage(id, data) {
    const { name, email, message } = data;
    const query = 'UPDATE messages SET name = $1, email = $2, message = $3 WHERE id = $4 RETURNING *';
    const result = await db.query(query, [name, email, message, id]);
    return result.rows[0];
  }

  static async deleteMessage(id) {
    const query = 'DELETE FROM messages WHERE id = $1';
    await db.query(query, [id]);
  }

  static async markAsRead(id) {
    const query = 'UPDATE messages SET is_read = true WHERE id = $1';
    await db.query(query, [id]);
  }

  static async getUnreadCount() {
    const query = 'SELECT COUNT(*) FROM messages WHERE is_read = false';
    const result = await db.query(query);
    return result.rows[0].count;
  }
}

module.exports = Message;
