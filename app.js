'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.enable('trust proxy');
app.use(bodyParser.json());

const Datastore = require('@google-cloud/datastore');
const datastore = Datastore();


app.post('/', (req, res, next) => {
  // Create a visit record to be stored in the database
  var visit = req.body;
  visit.timestamp = new Date();

  res.send(visit);
});

const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_flex_datastore_app]

module.exports = app;
