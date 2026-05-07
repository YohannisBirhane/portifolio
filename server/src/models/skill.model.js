const db = require('../config/db');

class Skill {
  static async getAllSkills() {
    const query = 'SELECT * FROM skills ORDER BY category, name';
    const result = await db.query(query);
    return result.rows;
  }

  static async getSkillById(id) {
    const query = 'SELECT * FROM skills WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  static async getSkillsByCategory(category) {
    const query = 'SELECT * FROM skills WHERE category = $1 ORDER BY name';
    const result = await db.query(query, [category]);
    return result.rows;
  }

  static async createSkill(name, category, level) {
    const query = 'INSERT INTO skills (name, category, level) VALUES ($1, $2, $3) RETURNING *';
    const result = await db.query(query, [name, category, level]);
    return result.rows[0];
  }

  static async updateSkill(id, data) {
    const { name, category, level } = data;
    const query = 'UPDATE skills SET name = $1, category = $2, level = $3 WHERE id = $4 RETURNING *';
    const result = await db.query(query, [name, category, level, id]);
    return result.rows[0];
  }

  static async deleteSkill(id) {
    const query = 'DELETE FROM skills WHERE id = $1';
    await db.query(query, [id]);
  }
}

module.exports = Skill;
