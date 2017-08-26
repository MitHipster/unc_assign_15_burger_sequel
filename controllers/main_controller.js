/*jslint esversion: 6, browser: true*/
const express = require('express');
// Import database model
const db = require('../models');

// Create the `router` for the app and export the `router` at the end of your file.
const router = express.Router();

// Router to get all burgers from the table
router.get('/', (req, res) => {
  db.Burger.findAll({
    order: [ ['burger_name', 'ASC'] ]
  }).then(burgers => {
    res.render('index', {burgers: burgers});
  });
});

// Route to add an uneaten burger to the list
router.post('/', (req, res) => {
  // const insert = {
  //   burger_name: req.body.burger_name,
  //   rest_name: req.body.rest_name,
  //   description: req.body.description
  // };
  // burger.insertOne(insert, (err, data) => {
  //   if (err) throw err;
  //   res.redirect('/');
  // });
});

// Route to update burger to 'devoured'
router.put('/:id', (req, res) => {
  // // Convert form value from string to boolean
  // const update = {devoured: Boolean(req.body.devoured)};
  // const cond = {id: req.params.id};
  // burger.updateOne(update, cond, (err, data) => {
  //   if (err) throw err;
  //   res.redirect('/');
  // });
});

// Route to delete burger from the database
router.delete('/:id', (req, res) => {
  // const cond = {id: req.params.id};
  // burger.deleteOne(cond, (err, data) => {
  //   if (err) throw err;
  //   res.redirect('/');
  // });
});

// Export routes for server.js to use.
module.exports = router;
