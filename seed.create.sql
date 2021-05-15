DROP DATABASE IF EXISTS greatbay;

CREATE DATABASE greatbay;

USE greatbay;

CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(50) NOT NULL UNIQUE,
    password varchar(255) NOT NULL
);

CREATE TABLE Items (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL UNIQUE,
    description varchar(255)
);

CREATE TABLE Bids (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    itemId INT NOT NULL,
    bid DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (itemId) REFERENCES Items(id)
);