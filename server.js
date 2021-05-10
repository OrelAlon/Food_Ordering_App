const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();
const cors = require('cors');

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());
// app.get('/', (req, res) => res.json('hello Orel'));

//Defint Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/dishes', require('./routes/dishes'));
app.use('/api/category', require('./routes/category'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));

//Server static in production
if (process.env.NODE_ENV === 'production') {
  //Set static floder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
