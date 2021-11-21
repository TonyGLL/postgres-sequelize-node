CREATE DATABASE postgres_typescript;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT,
    password VARCHAR(40),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password)
    VALUES  ('tony', 'tonygllambia@gamail.com', '12345678'),
            ('alberto', 'alberto@gamail.com', '12345678'),
            ('canco', 'canco@gamail.com', '12345678'),
            ('pedro', 'pedro@gamail.com', '12345678');