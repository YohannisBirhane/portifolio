const { Client } = require('pg');
require('dotenv').config();

async function createDatabaseAndTable() {
  const connectionString = process.env.DATABASE_URL;
  const dbName = process.env.DB_NAME;

  const dbConfig = connectionString
    ? {
        connectionString,
        ssl: { rejectUnauthorized: false },
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      };

  if (!connectionString) {
    console.log('Connecting to PostgreSQL to check database ' + dbName + '...');
    const initialClient = new Client({ ...dbConfig, database: 'postgres' });

    try {
      await initialClient.connect();
      const checkDbQuery = await initialClient.query(
        'SELECT datname FROM pg_catalog.pg_database WHERE datname = $1',
        [dbName]
      );

      if (checkDbQuery.rowCount === 0) {
        console.log('Database ' + dbName + ' not found. Creating it now...');
        await initialClient.query('CREATE DATABASE \x22' + dbName + '\x22');
        console.log('Database ' + dbName + ' created successfully!');
      } else {
        console.log('Database ' + dbName + ' already exists. Skipping creation.');
      }
    } catch (error) {
      if (error.code === '28P01') {
        console.error('\n? ERROR: Authentication failed. Please check your DB_PASSWORD in server/.env\n');
      } else {
        console.error('? Error during database creation:', error.message);
      }
      process.exit(1);
    } finally {
      await initialClient.end();
    }
  } else {
    console.log('DATABASE_URL detected. Skipping database creation and connecting directly to the hosted database...');
  }

  console.log('\nConnecting to the target database to create tables...');
  const targetClient = connectionString
    ? new Client(dbConfig)
    : new Client({ ...dbConfig, database: dbName });

  try {
    await targetClient.connect();
    
    const createTableQuery = `
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
    `;

    await targetClient.query(createTableQuery);
    console.log('? All database tables ensured successfully! Your database is completely ready.');
  } catch (error) {
    console.error('? Error creating tables:', error.message);
    process.exit(1);
  } finally {
    await targetClient.end();
  }
}

createDatabaseAndTable();

