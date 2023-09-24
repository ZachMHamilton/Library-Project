const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bookRouter = require('../routes/bookRouter');
const userRouter = require('../routes/userRouter');
// const wishListRouter = require('./routes/wishListRouter');
const PORT = 3000;
const mongoose = require('mongoose');

// connect to DB
const MONGO_URI =
  'mongodb+srv://zachmhamilton:zach@library.ru1mdk2.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Library',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// use cors, cookies, and json middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, 'client/build')));

// invoke router when request made to /books
app.use('/api/books', bookRouter);

// invoke router whenr equest made to /users
app.use('/api/users', userRouter);

// invoke router when request made to /wishlist
// app.use('/wishlist', wishListRouter);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
