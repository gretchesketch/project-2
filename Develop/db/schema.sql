DROP DATABASE IF EXISTS crowdfund_db;
CREATE DATABASE crowdfund_db;

CREATE TABLE User (
    _id AUTO_INCREMENT,
    name VARCHAR(30),
    username VARCHAR(30),
    password VARCHAR(30),
    PRIMARY KEY _id
);
CREATE TABLE Dog (
    _id AUTO_INCREMENT,
    name VARCHAR(30),
    breed VARCHAR(30),
    PRIMARY KEY _id
)