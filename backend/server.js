const path = require('path');

const express = require('express');

const app = express();

const bookRouter = require('./routes/bookRouter');

const wishListRouter = require('./routes/wishListRouter');

const PORT = 3000;

// parser to get data from body
app.use(express.json());

// serve static files

// invoke router when request made to /books
app.use('/books', bookRouter);

// invoke router when request made to /wishlist
app.use('/wishlist', wishListRouter);

// global route handler
app.use('/*', (req, res) => res.status(400));

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

module.exports = app;
