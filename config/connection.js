// Set up MySQL connection.
const mysql = require("mysql");

// Database connection info. You may need to edit with your credentials and port info.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "ps_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

module.exports = connection;