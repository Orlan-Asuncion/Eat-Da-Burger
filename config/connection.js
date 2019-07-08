// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "db3mqekzbtsyykyq",
  password: "chs0o11txywbdwrs",
  database: "zg8lu8fdvcs2f58h"
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
