## Welcome!
This is a command line application that allows you to run queries on a fake dataset of student/school data.

---

<div align="center"> 📚 📓 📓 📚 </div>

---

### Getting Started

1. Download this directory and open in your terminal.
2. You must have [Node.js](https://nodejs.org/) installed.
3. You must have [MySQL](https://dev.mysql.com/downloads/mysql) installed. Optionally, you can also install [MySQL workbench](https://dev.mysql.com/downloads/workbench/) as a MySQL GUI.
4. Update your MySQL database host, port, user and password in `conifg/connection.js` (careful not to save this anywhere public, like Github).
5. Run the scripts in `db/schema.sql`. Second, go to `db/dataLoad.sql` and change the filepath to match the location of your .csv files then run these scripts. You can do this in the MySQL command line client or in MySQL Workbench. These will create the database, tables and import our dataset.
6. Run `npm install` in your terminal to install all necessary node packages.
7. Now that you have all of that in place, You're ready to go! **Start the app** with `npm start`.
8. Use your arrow keys and return to select an option. All responses will be shown as JSON in the terminal.

---

<div align="center"> 📚 📓 📓 📚 </div>

---

### Other Notes

- This application was built with Node version 12.16.3 & MySQL version 8.0.22.
- The application logic and database queries can be seen in index.js
- When mapping home languages to IS0-639-1 codes, Spanish returns NULL because the dataset differentiates between Castilian & Catalan. We could change this to get a result of 'es' by updating that database row. In this case, I chose not to alter any of the data.

---

<div align="center"> 📚 📓 📓 📚 </div>

---

### Examples & Results

##### 1. Print the 3 most commonly used languages and the count of parents for each language.

**Query:** `SELECT language, COUNT(*) FROM parents GROUP BY language ORDER BY COUNT(*) DESC LIMIT 3;`

**Result:**  
Workbench: ![Picture of MySql results for Query 1](/assets/pictures/Q1.png)  
Command Line: ![Picture of terminal results for Query 1](/assets/pictures/Q1Term.png)  

##### 2. Print a list of students who do not have a cell phone number.

**Query:** `SELECT student_id, firstName, lastName FROM students WHERE cellphone IS NULL OR cellphone = '' ORDER BY lastName ASC;`

**Result:**  
Workbench: ![Picture of MySql results for Query 2](/assets/pictures/Q2.png)  
Command Line: ![Picture of terminal results for Query 2](/assets/pictures/Q2Term.png)  

##### 3. Print a list of students who are enrolled in a section with a course_name of Physics 9.

**Query:** `SELECT DISTINCT students.student_id, students.firstName, students.lastName FROM sections INNER JOIN rosters ON sections.section_id=rosters.section_id INNER JOIN students ON students.student_id=rosters.student_id WHERE sections.course_name='Physics 9' ORDER BY student_id ASC;`

**Result:**    
Workbench: ![Picture of MySql results for Query 3](/assets/pictures/Q3.png)    
Command Line: ![Picture of terminal results for Query 3](/assets/pictures/Q3Term.png)  
  
##### 5. Print a list of sections (section_id, course_name) who do not have any students enrolled.

**Query** `SELECT DISTINCT section_id, course_name FROM sections WHERE NOT EXISTS (SELECT * FROM rosters WHERE rosters.section_id = sections.section_id);`

**Result**  
There aren't any sections that don't have students enrolled. There is 1 course in rosters (150_49) that is not in sections.

##### 6. Print a list of sections and the students in each section.  

**Query:** `SELECT sections.section_id, sections.course_name, students.student_id FROM sections INNER JOIN rosters ON sections.section_id=rosters.section_id INNER JOIN students ON students.student_id=rosters.student_id order by course_name ASC;`

**Result:**  
Workbench: ![Picture of MySql results for Query 6](/assets/pictures/Q6.png)  
Command Line: ![Picture of terminal results for Query 6](/assets/pictures/Q6Term.png)

##### 7. Print a list of staff members (staff_id, first_name, last_name) who are connected to a section.

**Query** `SELECT staff.staff_id, staff.firstName, staff.lastName FROM staff INNER JOIN sections ON staff.staff_id=sections.staff_id;`

**Result**  
There are no staff assigned to sections  

##### Bonus 1. Print a language mapping for all the language codes in the parents.csv file that correspond to ISO-629-1.

**Query:** `SELECT DISTINCT parents.language, langCodes.alphaCode FROM parents LEFT JOIN langCodes ON parents.language=langCodes.engName ORDER BY language ASC;`

**Result:**  
Workbench: ![Picture of MySql results for Bonus 1](/assets/pictures/bonus.png)  
Command Line: ![Picture of terminal results for Bonus 1](/assets/pictures/BonusTerm.png)

##### Bonus 2. Check if any phone numbers appear in two or more of these files: students.csv, staff.csv, and parents.csv.

**Query:** `SELECT cellphone FROM students INNER JOIN staff on students.cellphone=staff.mobile UNION SELECT staff.mobile FROM staff INNER JOIN parents on staff.mobile=parents.mobile;`

**Result:**  
Workbench: ![Picture of MySql results for Bonus 2](/assets/pictures/bonus2.png)  
Command Line: ![Picture of terminal results for Bonus 2](/assets/pictures/bonus2Term.png) 


