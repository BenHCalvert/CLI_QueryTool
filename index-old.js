const inquirer = require("inquirer");
const connection = require("./config/connection.js");

// program starts with this call
runSearch();

// Inquirer asks this list of questions @ program start
function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Print the 3 most commonly used languages and the count of parents for each language.",
                new inquirer.Separator(),
                "Print a list of students (student_id, first_name, last_name) who do not have a cell phone number.",
                new inquirer.Separator(),
                "Print a list of students (student_id, first_name, last_name) who are enrolled in a section with a course_name of Physics 9.",
                new inquirer.Separator(),
                "Print a list of students (student_id, first_name, last_name) who do not have parents listed in the parents.csv or have parents with no contact information.",
                new inquirer.Separator(),
                "Print a list of sections (section_id, course_name) who do not have any students enrolled.",
                new inquirer.Separator(),
                "Print a list of sections and the students in each section (section_id, course_name, student_ids).",
                new inquirer.Separator(),
                "Print a list of staff members (staff_id, first_name, last_name) who are connected to a section.",
                new inquirer.Separator(),
                "Print a language mapping for all the language codes in the parents.csv file that correspond to ISO-629-1",
                new inquirer.Separator(),
                "exit",
                new inquirer.Separator()
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Print the 3 most commonly used languages and the count of parents for each language.":
                    langFrequency();
                    break;

                case "Print a list of students (student_id, first_name, last_name) who do not have a cell phone number.":
                    noPhoneSearch();
                    break;

                case "Print a list of students (student_id, first_name, last_name) who are enrolled in a section with a course_name of Physics 9.":
                    physicsSearch();
                    break;

                case "Print a list of students (student_id, first_name, last_name) who do not have parents listed in the parents.csv or have parents with no contact information.":
                    missingHouseholdSearch();
                    break;

                case "Print a list of sections (section_id, course_name) who do not have any students enrolled.":
                    emptySectionSearch();
                    break;

                case "Print a list of sections and the students in each section (section_id, course_name, student_ids).":
                    rosterBuilder();
                    break;

                case "Print a list of staff members (staff_id, first_name, last_name) who are connected to a section.":
                    activeTeachers();
                    break;
                
                case "Print a language mapping for all the language codes in the parents.csv file that correspond to ISO-629-1":
                    langCode();
                    break;


                case "exit":
                    console.log('Program is now ending. Restart with npm start.')
                    connection.end();                    
                    break;
            }
        });
}

// ****
// Functions that run queries
// ****

// Function searches for the top 3 most freqeunt home languages for parents
function langFrequency() {
    var query = "SELECT language, COUNT(*) FROM parents GROUP BY language ORDER BY COUNT(*) DESC LIMIT 3;";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(JSON.stringify(res[i]));            
        }
        runSearch();
    });
}

// Function returns students who do not have a cell phone number
function noPhoneSearch() {
    var query = "SELECT student_id, firstName, lastName FROM students WHERE cellphone IS NULL OR cellphone = '' ORDER BY lastName ASC;";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(JSON.stringify(res[i]));
        }
        runSearch();
    });
}

// Function returns students enrolled in Physics 9
function physicsSearch() {
    var query = "SELECT DISTINCT students.student_id, students.firstName, students.lastName FROM sections INNER JOIN rosters ON sections.section_id=rosters.section_id INNER JOIN students ON students.student_id=rosters.student_id WHERE sections.course_name='Physics 9' ORDER BY student_id ASC;";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(JSON.stringify(res[i]));
        }
        runSearch();
    });
}


// Function returns students without registered guardian or guardian w/o contact info
function missingHouseholdSearch() {
    var query = "";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(JSON.stringify(res[i]));
        }
        runSearch();
    });
}

// Prints list of sections w/o students enrolled
function emptySectionSearch() {
    var query = "";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(JSON.stringify(res[i]));
        }
        runSearch();
    });
}

// Prints list of sections and students in those sections
function rosterBuilder() {
    var query = "SELECT sections.section_id, sections.course_name, students.student_id FROM sections INNER JOIN rosters ON sections.section_id=rosters.section_id INNER JOIN students ON students.student_id=rosters.student_id order by course_name ASC;";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(JSON.stringify(res[i]));
        }
        runSearch();
    });
}

// Print list of staff who are connected to a section
function activeTeachers() {
    var query = "SELECT staff.staff_id, staff.firstName, staff.lastName FROM staff INNER JOIN sections ON staff.staff_id=sections.staff_id;";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(JSON.stringify(res[i]));
        }
        runSearch();
    });
}

// Print a list of languages spoken by parents and the corresponding ISO-639-1 code. Spanish returns NULL because the dataset differentiates between Castilian & Catalan
function langCode() {
    var query = "SELECT DISTINCT parents.language, langCodes.alphaCode FROM parents LEFT JOIN langCodes ON parents.language=langCodes.engName ORDER BY language ASC;";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(JSON.stringify(res[i]));
        }
        runSearch();
    });
}
