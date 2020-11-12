-- loading data
LOAD DATA INFILE '/Users/ben/Documents/Code/Interviews/ParentSquare/Private/parents.csv' 
INTO TABLE parents 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '/Users/ben/Documents/Code/Interviews/ParentSquare/Private/rosters.csv' 
INTO TABLE rosters 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '/Users/ben/Documents/Code/Interviews/ParentSquare/Private/sections.csv' 
INTO TABLE sections 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '/Users/ben/Documents/Code/Interviews/ParentSquare/Private/staff.csv' 
INTO TABLE staff 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '/Users/ben/Documents/Code/Interviews/ParentSquare/Private/students.csv' 
INTO TABLE students 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;