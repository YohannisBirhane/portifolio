const db = require('../config/db');

class Education {
  static async getAllEducation() {
    const query = 'SELECT * FROM education ORDER BY id DESC';
    const result = await db.query(query);
    return result.rows;
  }

  static async getLatestEducation() {
    const query = 'SELECT * FROM education ORDER BY id DESC LIMIT 1';
    const result = await db.query(query);
    return result.rows[0];
  }

  static async createEducation(data) {
    const { institution, department, year_level, description } = data;
    const query = 'INSERT INTO education (institution, department, year_level, description) VALUES ($1, $2, $3, $4) RETURNING *';
    const result = await db.query(query, [institution, department, year_level, description]);
    return result.rows[0];
  }

  static async updateEducation(id, data) {
    const { institution, department, year_level, description } = data;
    const query = 'UPDATE education SET institution = $1, department = $2, year_level = $3, description = $4 WHERE id = $5 RETURNING *';
    const result = await db.query(query, [institution, department, year_level, description, id]);
    return result.rows[0];
  }

  static async deleteEducation(id) {
    const query = 'DELETE FROM education WHERE id = $1';
    await db.query(query, [id]);
  }
}

module.exports = Education;