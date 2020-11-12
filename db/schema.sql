-- create and use the db
DROP DATABASE IF EXISTS ps_db;
CREATE DATABASE ps_db;
USE ps_db;

-- creating tables
CREATE TABLE parents (
    id INT NOT NULL AUTO_INCREMENT,
    school_id INT,
    student_id INT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    mobile VARCHAR(255),
    language VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE rosters (
    id INT NOT NULL AUTO_INCREMENT,
    school_id INT,
    section_id VARCHAR(255),
    student_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE sections (
    id INT NOT NULL AUTO_INCREMENT,
    school_id INT,
    section_id VARCHAR(255),
    staff_id INT,
    course_name VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE parents (
    id INT NOT NULL AUTO_INCREMENT,
    school_id INT,
    student_id INT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    mobile VARCHAR(255),
    language VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE staff (
    id INT NOT NULL AUTO_INCREMENT,
    school_id INT,
    staff_id INT,
    title VARCHAR(255),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    mobile VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE students (
    id INT NOT NULL AUTO_INCREMENT,
    school_id INT,
    student_id INT,
    state_student_id INT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    grade_level INT,
    status BOOLEAN,
    studentEmail VARCHAR(255),
    cellphone VARCHAR(255),
    PRIMARY KEY (id)
);

-- loading data
LOAD DATA INFILE 'c:/tmp/discounts.csv' 
INTO TABLE discounts 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;