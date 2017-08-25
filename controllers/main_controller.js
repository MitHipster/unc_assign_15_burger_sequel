/*jslint esversion: 6, browser: true*/
const express = require('express');
// Import the model to use database functions
const burger = require('../models/burger.js');

// Create the `router` for the app and export the `router` at the end of your file.
const router = express.Router();

// Router to get all burgers from the table
router.get('/', (req, res) => {
  const order = 'date';
  burger.selectAll(order, (err, data) => {
    if (err) throw err;
    res.render('index', {burgers: data});
  });
});

// Route to add an uneaten burger to the list
router.post('/', (req, res) => {
  const insert = {
    burger_name: req.body.burger_name,
    rest_name: req.body.rest_name,
    description: req.body.description
  };
  // const name = req.body.burger_name;
  burger.insertOne(insert, (err, data) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Route to update burger to 'devoured'
router.put('/:id', (req, res) => {
  // Convert form value from string to boolean
  const update = {devoured: Boolean(req.body.devoured)};
  const cond = {id: req.params.id};
  burger.updateOne(update, cond, (err, data) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Route to delete burger from the database
router.delete('/:id', (req, res) => {
  const cond = {id: req.params.id};
  burger.deleteOne(cond, (err, data) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
