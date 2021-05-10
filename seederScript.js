// require('dotenv').config();
const config = require('config');

const dishesData = require('./data/dishes');
const connectDB = require('./config/db');
const Orders = require('./models/Orders');

connectDB();

const importData = async () => {
  try {
    await Orders.deleteMany({});

    await Orders.insertMany(dishesData);

    console.log('Data Import Success');

    process.exit();
  } catch (error) {
    console.error('Errorrrrrrrrr with data import', error);
    process.exit(1);
  }
};

importData();
