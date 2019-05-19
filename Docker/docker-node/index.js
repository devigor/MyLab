const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World inside Docker');
});

app.get('/igor', (req, res) => {
  res.send('Hello Igor!! How are you?');
  console.log('Mongo: ', mongoose);
});

app.listen(PORT, HOST);
