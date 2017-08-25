/*jslint esversion: 6, browser: true*/
const mysql = require('mysql');
let connection;

// Set up MySQL connection for deployment on Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
}

// Establish connection
connection.connect( err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;
