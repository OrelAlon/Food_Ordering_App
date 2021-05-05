const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { validationResult, check } = require('express-validator');

const User = require('../models/User');
const Orders = require('../models/Orders');

// @route    GET api/orders
// @desc     Get all user order
// @access   Privte
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Orders.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/orders
// @desc     Add a new order
// @access   Privte
router.post('/', (req, res) => {
  res.send('Log in user');
});

// @route    PUT api/orders/:id
// @desc     Update order
// @access   Privte
router.put('/:id', (req, res) => {
  res.send('update order');
});

// @route    DELETE api/orders/:id
// @desc     Delete order
// @access   Privte
router.delete('/:id', (req, res) => {
  res.send('delete order');
});

module.exports = router;
