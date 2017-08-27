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
  }).then( results => {
    res.render('index', {burgers: results});
  });
});

// Route to add an uneaten burger to the list
router.post('/', (req, res) => {
  db.Burger.create(req.body).then( () => {
    res.redirect('/');
  });
});

// Route to update burger to 'devoured'
router.put('/:id', (req, res) => {
  db.Burger.update(req.body, {
    where: {id: req.params.id}
  }).then( () => {
    res.redirect('/');
  });
});

// Route to delete burger from the database
router.delete('/:id', (req, res) => {
  db.Burger.destroy({
    where: {id: req.params.id}
  }).then( () => {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
