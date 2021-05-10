const express = require('express');
const router = express.Router();
const dishes = require('../data/dishes');

router.get('/', (req, res) => {
  console.log(dishes);
  res.json(dishes).send();
});

module.exports = router;
