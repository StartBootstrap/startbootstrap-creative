'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// console.log(path.join(__dirname, '../img'))

//static middleware the files are at the root so going to the root of application
app.use(express.static(path.join(__dirname, '..')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
