export const createUsers = `
CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar,
    email varchar,
    password varchar, 
    avatar varchar NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
 	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`