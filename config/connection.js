// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "q0fa5z0e6qnzwwd6",
  password: "ybny8oq1xp0p3x53",
  database: "iuid9v3nz7712wr0"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
