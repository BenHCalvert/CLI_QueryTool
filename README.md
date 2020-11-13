## Welcome!
<div align="center"> 📚 🏫 📓 📚 </div>
This is a Command Line Interface application that allows you to run queries on a fake dataset of student/school data. 


#### Getting Started

 TODO need instructions on getting data into DB and establishing DB connection -> insert these somewhere after step 3.
    change username and password in `index.js` (careful not to save this anywhere public, like Github.)
    first, run the scripts in `schema.sql`. Second, run the scripts in `dataLoad.sql`. You can do this in the MySQL command line client or in MySQL Workbench.  


1. Download this directory and open in your terminal.
2. You must have [Node.js](https://nodejs.org/) installed. This app was built with v12.16.3.
3. You must have [MySQL](https://dev.mysql.com/downloads/mysql) installed. Optionally, you can also install [MySQL workbench](https://dev.mysql.com/downloads/workbench/) as a MySQL GUI.
3. run `npm install` in your terminal to install all necessary node packages.
4. Now that you have all of that in place, You're ready to go! **Start the app** with `node start`.'


#### Examples & Results

##### Print the 3 most commonly used languages and the count of parents for each language.

**Query:** `SELECT language, COUNT(*) FROM parents GROUP BY language ORDER BY COUNT(*) DESC LIMIT 3;`

**Result:** ![Picture of MySql Results for Query 1](/assets/pictures/Q1.png width=150x)

##### Print a list of students who do not have a cell phone number.

**Query:** `SELECT student_id, firstName, lastName FROM students WHERE cellphone IS NULL OR cellphone = '' ORDER BY lastName ASC;`

**Result:** ![Picture of MySql Results for Query 2](/assets/pictures/Q2.png width=150x)

##### Print a list of students who are enrolled in a section with a course_name of Physics 9.

**Query:** `SELECT DISTINCT students.student_id, students.firstName, students.lastName FROM sections INNER JOIN rosters ON sections.section_id=rosters.section_id INNER JOIN students ON students.student_id=rosters.student_id WHERE sections.course_name='Physics 9' ORDER BY student_id ASC;`

**Result:** ![Picture of MySql Results for Query 3](/assets/pictures/Q3.png width=150x)

##### Print a list of sections and the students in each section.

**Query:** `SELECT sections.section_id, sections.course_name, students.student_id FROM sections INNER JOIN rosters ON sections.section_id=rosters.section_id INNER JOIN students ON students.student_id=rosters.student_id order by course_name ASC;`

**Result:** ![Picture of MySql Results for Query 6](/assets/pictures/Q6.png width=150x) <img alt="Picture of MySql Results for Query 6"src="/assets/pictures/Q6.png width=150x" width="125">

