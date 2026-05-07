const db = require('../config/db');

class Project {
  static async getAllProjects() {
    const query = 'SELECT * FROM projects ORDER BY created_at DESC';
    const result = await db.query(query);
    return result.rows;
  }

  static async getProjectById(id) {
    const query = 'SELECT * FROM projects WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  static async createProject(data) {
    const { title, description, tech_stack, image, github_link, live_link } = data;
    const query = 'INSERT INTO projects (title, description, tech_stack, image, github_link, live_link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const result = await db.query(query, [title, description, tech_stack, image, github_link, live_link]);
    return result.rows[0];
  }

  static async updateProject(id, data) {
    const { title, description, tech_stack, image, github_link, live_link } = data;
    const query = 'UPDATE projects SET title = $1, description = $2, tech_stack = $3, image = $4, github_link = $5, live_link = $6 WHERE id = $7 RETURNING *';
    const result = await db.query(query, [title, description, tech_stack, image, github_link, live_link, id]);
    return result.rows[0];
  }

  static async deleteProject(id) {
    const query = 'DELETE FROM projects WHERE id = $1';
    await db.query(query, [id]);
  }

  static async addTag(projectId, tagName) {
    const query = 'INSERT INTO project_tags (project_id, tag_name) VALUES ($1, $2) RETURNING *';
    const result = await db.query(query, [projectId, tagName]);
    return result.rows[0];
  }

  static async getTags(projectId) {
    const query = 'SELECT * FROM project_tags WHERE project_id = $1';
    const result = await db.query(query, [projectId]);
    return result.rows;
  }

  static async removeTag(tagId) {
    const query = 'DELETE FROM project_tags WHERE id = $1';
    await db.query(query, [tagId]);
  }
}

module.exports = Project;
