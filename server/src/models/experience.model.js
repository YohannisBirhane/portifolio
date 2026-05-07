const db = require('../config/db');

class Experience {
  static async getAllExperience() {
    const query = 'SELECT * FROM experience ORDER BY start_date DESC';
    const result = await db.query(query);
    return result.rows;
  }

  static async getExperienceById(id) {
    const query = 'SELECT * FROM experience WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  static async createExperience(data) {
    const { title, organization, start_date, end_date, description } = data;
    const query = 'INSERT INTO experience (title, organization, start_date, end_date, description) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const result = await db.query(query, [title, organization, start_date, end_date, description]);
    return result.rows[0];
  }

  static async updateExperience(id, data) {
    const { title, organization, start_date, end_date, description } = data;
    const query = 'UPDATE experience SET title = $1, organization = $2, start_date = $3, end_date = $4, description = $5 WHERE id = $6 RETURNING *';
    const result = await db.query(query, [title, organization, start_date, end_date, description, id]);
    return result.rows[0];
  }

  static async deleteExperience(id) {
    const query = 'DELETE FROM experience WHERE id = $1';
    await db.query(query, [id]);
  }
}

module.exports = Experience;
