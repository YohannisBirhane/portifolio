-- Add missing columns to experience table if they don't exist
ALTER TABLE experience
ADD COLUMN IF NOT EXISTS company VARCHAR(150),
ADD COLUMN IF NOT EXISTS position VARCHAR(150),
ADD COLUMN IF NOT EXISTS tech_stack TEXT;
