const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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

module.exports = app;
