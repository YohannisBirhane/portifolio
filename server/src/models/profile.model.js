const db = require('../config/db');

class Profile {
  static async getAllProfiles() {
    const query = 'SELECT * FROM profile';
    const result = await db.query(query);
    return result.rows;
  }

  static async getLatestProfile() {
    const query = 'SELECT * FROM profile ORDER BY id DESC LIMIT 1';
    const result = await db.query(query);
    return result.rows[0];
  }

  static async createProfile(data) {
    const { full_name, title, bio, image, github, linkedin, email } = data;
    const query = 'INSERT INTO profile (full_name, title, bio, image, github, linkedin, email) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const result = await db.query(query, [full_name, title, bio, image, github, linkedin, email]);
    return result.rows[0];
  }

  static async updateProfile(id, data) {
    const { full_name, title, bio, image, github, linkedin, email } = data;
    const query = 'UPDATE profile SET full_name = $1, title = $2, bio = $3, image = $4, github = $5, linkedin = $6, email = $7 WHERE id = $8 RETURNING *';
    const result = await db.query(query, [full_name, title, bio, image, github, linkedin, email, id]);
    return result.rows[0];
  }

  static async deleteProfile(id) {
    const query = 'DELETE FROM profile WHERE id = $1';
    await db.query(query, [id]);
  }
}

module.exports = Profile;
