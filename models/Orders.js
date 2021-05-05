const mongoose = require('mongoose');

const OrdersSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  restaurant: {
    type: String,
    required: true,
  },
  diners: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('orders', OrdersSchema);
