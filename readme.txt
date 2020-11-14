How to run the code:

1. Download this directory and open in your terminal.
2. You must have [Node.js](https://nodejs.org/) installed.
3. You must have [MySQL](https://dev.mysql.com/downloads/mysql) installed. Optionally, you can also install [MySQL workbench](https://dev.mysql.com/downloads/workbench/) as a MySQL GUI.
4. Update your MySQL database host, port, user and password in `conifg/connection.js` (careful not to save this anywhere public, like Github).
5. Run the scripts in `db/schema.sql`. Second, go to `db/dataLoad.sql` and change the filepath to match the location of your .csv files then run these scripts. You can do this in the MySQL command line client or in MySQL Workbench. These will create the database, tables and import our dataset.
6. Run `npm install` in your terminal to install all necessary node packages.
7. Now that you have all of that in place, You're ready to go! **Start the app** with `npm start`.
8. Use your arrow keys and return to select an option. All responses will be shown as JSON in the terminal.

Other Notes:

- This application was built with Node version 12.16.3 & MySQL version 8.0.22.