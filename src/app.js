const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const evalStub = require('./eval-stub');


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.end('hektor.one predictor backend');
});

app.post('/forecast', (req, res) => {
  console.log(req.body);  // logging
  const data = {
    priceFrom: 45000,
    priceTill: 50000,
  };
  res.json({ data });
});

app.post('/email', (req, res) => {
  console.log(req.body);  // logging
  res.status(201).send();
});

app.post('/evaluation', (req, res) => {
  console.log('incoming request...')
  res.json(evalStub);
  //res.status(400).end();
});

module.exports = app;
