// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3300,
  host: "localhost",
  user: "root",
  password: "Grishu9911@",
  database: "greating"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
