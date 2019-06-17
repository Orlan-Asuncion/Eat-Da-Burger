--Drop database if exists burgers_db
DROP DATABASE IF EXISTS burgers_db;

-- Create database burgers_db
CREATE DATABASE burgers_db;

--USE burgers_db
USE burgers_db;

--Create table burgers with these fields id, burger_name and devoured
CREATE TABLE burgers(
    id INT(10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (40) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;
