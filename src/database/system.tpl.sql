-- System table for keeping track of changes and where we are currently

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS <<DATABASE-NAME>>.systemdata (
    datakey VARCHAR(15) PRIMARY KEY,
    dataval VARCHAR(15)
);

-- Insert default values without overwriting existing ones.
INSERT IGNORE INTO <<DATABASE-NAME>>.systemdata VALUES
  ("dbinstallversion",
   "0");