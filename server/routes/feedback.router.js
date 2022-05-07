const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

// Get all surveys
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback";';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting feedback', error);
    res.sendStatus(500);
  });
});

// Adds a new survey to the list of surveys
router.post('/',  (req, res) => {
  let newSurvey = req.body;
  console.log(`Adding feedback`, newSurvey);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [newSurvey.feeling, newSurvey.understanding, newSurvey.support, newSurvey.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new survey`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
