-- Scripts to load data from CSV files. Must replace with filepath to file location on your device.
LOAD DATA INFILE 'ENTER YOUR FILE PATH HERE/parents.csv' 
INTO TABLE parents 
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'ENTER YOUR FILE PATH HERE/rosters.csv' 
INTO TABLE rosters 
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'ENTER YOUR FILE PATH HERE/sections.csv' 
INTO TABLE sections 
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'ENTER YOUR FILE PATH HERE/staff.csv' 
INTO TABLE staff 
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'ENTER YOUR FILE PATH HERE/students.csv' 
INTO TABLE students 
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

-- DATA SOURCE: https://datahub.io/core/language-codes/r/language-codes.csv
LOAD DATA INFILE 'ENTER YOUR FILE PATH HERE/language-codes.csv' 
INTO TABLE langCodes 
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 0 ROWS;