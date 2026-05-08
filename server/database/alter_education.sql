-- Add the education table if it does not exist
CREATE TABLE IF NOT EXISTS education (
  id SERIAL PRIMARY KEY,
  institution VARCHAR(200) NOT NULL,
  department VARCHAR(200) NOT NULL,
  year_level VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);