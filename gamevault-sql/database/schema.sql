-- Creación de la base de datos para el laboratorio de GameVault
CREATE DATABASE IF NOT EXISTS gamevault CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE gamevault;

-- Eliminar tablas si ya existen para un entorno limpio
DROP TABLE IF EXISTS admin_notes;
DROP TABLE IF EXISTS games;

-- Tabla principal de videojuegos (pública)
CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    genre VARCHAR(50) NOT NULL,
    platform VARCHAR(100) NOT NULL,
    release_year INT NOT NULL,
    developer VARCHAR(100) NOT NULL,
    rating VARCHAR(10) NOT NULL,
    image VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla confidencial ficticia (servirá para demostrar la fuga de información mediante UNION SELECT)
CREATE TABLE admin_notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    note VARCHAR(255) NOT NULL,
    internal_code VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


