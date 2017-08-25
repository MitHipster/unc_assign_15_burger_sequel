/*jslint esversion: 6, browser: true*/
// Require MySQL connection
const connection = require('./connection.js');

// Object to hold our SQL statement functions.
const orm = {
  selectAll: (table, order, call) => {
    const qry = 'SELECT * FROM ?? ORDER BY ?? DESC';
    connection.query(qry, [table, order], (err, result) => {
      call(err, result);
    });
  },
  insertOne: (table, insert, call) => {
    const qry = 'INSERT INTO ?? SET ?';
    connection.query(qry, [table, insert], (err, result) => {
      call(err, result);
    });
  },
  updateOne: (table, update, cond, call) => {
    const qry = 'UPDATE ?? SET ? WHERE ?';
    connection.query(qry, [table, update, cond], (err, result) => {
      call(err, result);
    });
  },
  deleteOne: (table, cond, call) => {
    const qry = 'DELETE FROM ?? WHERE ?';
    connection.query(qry, [table, cond], (err, result) => {
      call(err, result);
    });
  }
};

module.exports = orm;
