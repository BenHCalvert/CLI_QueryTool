-- create and use the db
DROP DATABASE IF EXISTS ps_db;
CREATE DATABASE IF NOT EXISTS ps_db;
USE ps_db;

-- creating tables
CREATE TABLE parents (
    school_id INT,
    student_id INT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    mobile VARCHAR(255),
    language VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS rosters (
    school_id INT,
    section_id VARCHAR(255),
    student_id INT
);

CREATE TABLE IF NOT EXISTS sections (
    school_id INT,
    section_id VARCHAR(255),
    staff_id INT,
    course_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS staff (
    school_id INT,
    staff_id INT,
    title VARCHAR(255),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    mobile VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS students (
    school_id INT,
    student_id INT,
    state_student_id INT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    grade_level INT,
    status BOOLEAN,
    studentEmail VARCHAR(255),
    cellphone VARCHAR(255)
);