const express = require('express');
const router = express.Router();
const category = require('../data/category');

router.get('/', (req, res) => {
  console.log(category);
  res.json(category).send();
});

module.exports = router;
