-- DROP TABLE IF EXISTS task;

CREATE TABLE IF NOT EXISTS task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description text,
    status VARCHAR(255),
    category VARCHAR(255),
    due_date DATE DEFAULT NOW()
);