/*
  Initial Setup file for qbits. All subsequent files will include a changelog at the beginning as well as commit the changes to existing databases.

  Changelog:
    - Initial Setup.
 */

-- 1.0
DROP DATABASE IF EXISTS << DATABASE - NAME >>;
CREATE DATABASE << DATABASE - NAME >>;

-- 1.1.1
CREATE TABLE events
(
  -- TODO: event_id BIGINT UNSIGNED AUTO_INCREMENT, -- Need to think about this one
  event_domain   VARCHAR(100) NOT NULL,
  event_location VARCHAR(100) NOT NULL,
  event_time     BIGINT -- MS since EPOCH

);
