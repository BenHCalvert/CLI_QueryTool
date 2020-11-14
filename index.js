// Using Inquirer.js to prompt question in the terminal. https://www.npmjs.com/package/inquirer
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
                // new inquirer.Separator(),
                // "Print a list of students (student_id, first_name, last_name) who do not have parents listed in the parents.csv or have parents with no contact information.",
                new inquirer.Separator(),
                "Print a list of sections (section_id, course_name) who do not have any students enrolled.",
                new inquirer.Separator(),
                "Print a list of sections and the students in each section (section_id, course_name, student_ids).",
                new inquirer.Separator(),
                "Print a list of staff members (staff_id, first_name, last_name) who are connected to a section.",
                new inquirer.Separator(),
                "Print a language mapping for all the language codes in the parents.csv file that correspond to ISO-629-1",
                new inquirer.Separator(),
                "Check if any phone numbers appear in two or more of these files: students.csv, staff.csv, and parents.csv.",
                new inquirer.Separator(),
                "exit",
                new inquirer.Separator()
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Print the 3 most commonly used languages and the count of parents for each language.":
                    var query = "SELECT language, COUNT(*) FROM parents GROUP BY language ORDER BY COUNT(*) DESC LIMIT 3;";
                    runQuery(query);
                    break;

                case "Print a list of students (student_id, first_name, last_name) who do not have a cell phone number.":
                    var query = "SELECT student_id, firstName, lastName FROM students WHERE cellphone IS NULL OR cellphone = '' ORDER BY lastName ASC;";
                    runQuery(query);
                    break;

                case "Print a list of students (student_id, first_name, last_name) who are enrolled in a section with a course_name of Physics 9.":
                    var query = "SELECT DISTINCT students.student_id, students.firstName, students.lastName FROM sections INNER JOIN rosters ON sections.section_id=rosters.section_id INNER JOIN students ON students.student_id=rosters.student_id WHERE sections.course_name='Physics 9' ORDER BY student_id ASC;";
                    runQuery(query);
                    break;

                // case "Print a list of students (student_id, first_name, last_name) who do not have parents listed in the parents.csv or have parents with no contact information.":
                //     runQuery(query);
                //     break;

                case "Print a list of sections (section_id, course_name) who do not have any students enrolled.":
                    // Not fully confident in this query. Difficult because either sections or rosters could have section_ids not included in the other table so must check both against each other.
                    var query = "SELECT DISTINCT section_id, course_name FROM sections WHERE NOT EXISTS (SELECT * FROM rosters WHERE rosters.section_id = sections.section_id);"
                    runQuery(query);
                    break;

                case "Print a list of sections and the students in each section (section_id, course_name, student_ids).":
                    var query = "SELECT sections.section_id, sections.course_name, students.student_id FROM sections INNER JOIN rosters ON sections.section_id=rosters.section_id INNER JOIN students ON students.student_id=rosters.student_id order by course_name ASC;";
                    runQuery(query);
                    break;

                case "Print a list of staff members (staff_id, first_name, last_name) who are connected to a section.":
                    var query = "SELECT staff.staff_id, staff.firstName, staff.lastName FROM staff INNER JOIN sections ON staff.staff_id=sections.staff_id;";
                    runQuery(query);
                    break;

                case "Print a language mapping for all the language codes in the parents.csv file that correspond to ISO-629-1":
                    var query = "SELECT DISTINCT parents.language, langCodes.alphaCode FROM parents LEFT JOIN langCodes ON parents.language=langCodes.engName ORDER BY language ASC;";
                    runQuery(query);
                    break;

                case "Check if any phone numbers appear in two or more of these files: students.csv, staff.csv, and parents.csv.":
                    // Not fully confident in this query
                    var query = "SELECT cellphone FROM students INNER JOIN staff on students.cellphone=staff.mobile UNION SELECT staff.mobile FROM staff INNER JOIN parents on staff.mobile=parents.mobile;";
                    runQuery(query);
                    break;

                case "exit":
                    console.log('Program is now ending. Restart with npm start.')
                    connection.end();
                    break;
            }
        });
}

// Function to run query and print response to console
function runQuery(query) {
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            // console.log response as JSON
            console.log(JSON.stringify(res[i]));
        }
        runSearch();
    });
}
