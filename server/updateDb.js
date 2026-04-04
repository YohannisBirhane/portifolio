const fs = require('fs');
const path = require('path');
const targetPath = path.join('..', 'server', 'setupDatabase.js');
let dbScript = fs.readFileSync(targetPath, 'utf8');

const queryBlock = \
    const createTablesQuery = \\\\\
      -- 1. users
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin'
      );

      -- 2. profile
      CREATE TABLE IF NOT EXISTS profile (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(150) NOT NULL,
        title VARCHAR(150),
        bio TEXT,
        image TEXT,
        github VARCHAR(255),
        linkedin VARCHAR(255),
        email VARCHAR(150)
      );

      -- 3. projects
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(150) NOT NULL,
        description TEXT NOT NULL,
        tech_stack TEXT,
        image TEXT,
        github_link VARCHAR(255),
        live_link VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- 4. skills
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(100),
        level VARCHAR(50)
      );

      -- 5. messages
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_read BOOLEAN DEFAULT FALSE
      );

      -- 6. experience
      CREATE TABLE IF NOT EXISTS experience (
        id SERIAL PRIMARY KEY,
        title VARCHAR(150) NOT NULL,
        organization VARCHAR(150),
        description TEXT,
        start_date DATE,
        end_date DATE
      );

      -- 7. project_tags
      CREATE TABLE IF NOT EXISTS project_tags (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
        tag_name VARCHAR(50) NOT NULL
      );
    \\\\\;

    await targetClient.query(createTablesQuery);
    console.log('? All recommended portfolio tables created successfully!');
\;

const marker = "const createTableQuery = 'CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(150) NOT NULL, message TEXT NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);';\r\n\r\n    await targetClient.query(createTableQuery);\r\n    console.log('? messages table ensured successfully! Your database is completely ready.');";

let splitIndex = dbScript.indexOf(marker.substring(0, 30));
if (splitIndex !== -1) {
    const endPart = dbScript.indexOf("} catch (error) {", splitIndex);
    dbScript = dbScript.substring(0, splitIndex) + queryBlock + "\\n  " + dbScript.substring(endPart);
    fs.writeFileSync(targetPath, dbScript, 'utf8');
    console.log('Replaced query block');
} else {
    console.log('Could not find marker');
}
