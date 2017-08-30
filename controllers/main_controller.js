/*jslint esversion: 6, browser: true*/
const express = require('express');
// Import database model
const db = require('../models');

// Create the `router` for the app and export the `router` at the end of your file.
const router = express.Router();

// Router to get all ratings and burgers from the tables
router.get('/', (req, res) => {
  db.Rating.findAll({
    include: [db.Burger],
    order: [
      [ 'rating_value', 'DESC' ],
      [ { model: db.Burger }, 'burger_name', 'ASC' ]
    ]
  }).then( results => {
    // Pass multiple datasets to creating the rated subsections. Unrated are burgers that have not been tried.
    res.render('index', {
      stars5: results[0],
      stars4: results[1],
      stars3: results[2],
      stars2: results[3],
      stars1: results[4],
      unrated: results[5]
    });
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
