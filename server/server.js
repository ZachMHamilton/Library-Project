const path = require('path');

const express = require('express');

const app = express();

const bookRouter = require('./routes/bookRouter');

const userRouter = require('./routes/UserRouter.js');

const wishListRouter = require('./routes/wishListRouter');

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

// parser to get data from body
app.use(express.json());

// serve static files

// invoke router when request made to /books
app.use('/api/books', bookRouter);

// invoke router when user logs in
app.use('/login', userRouter);
// invoke router when request made to /wishlist
// app.use('/wishlist', wishListRouter);

// global route handler
// app.use('/*', (req, res) => res.status(400));

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
