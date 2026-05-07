const db = require('../config/db');

class User {
  static async createUser(name, email, password) {
    const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const result = await db.query(query, [name, email, password]);
    return result.rows[0];
  }

  static async getUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await db.query(query, [email]);
    return result.rows[0];
  }

  static async getUserById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  static async updateUser(id, data) {
    const { name, email, password, role } = data;
    const query = 'UPDATE users SET name = $1, email = $2, password = $3, role = $4 WHERE id = $5 RETURNING *';
    const result = await db.query(query, [name, email, password, role, id]);
    return result.rows[0];
  }

  static async deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = $1';
    await db.query(query, [id]);
  }
}

module.exports = User;
