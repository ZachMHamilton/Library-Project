// require DB here
const models = require('../models/booksModel');

const booksController = {};

// ALL NEED TO ALSO CHECK THE USER MATCHES!!!

// WORKS
booksController.getBooks = (req, res, next) => {
  // get all user books from DB here
  models.Book.find()
    .then((data) => {
      // add data to locals
      res.locals.books = data;
      return next();
    })
    .catch((err) => {
      console.log('error', err);
      return next(err);
    });
};

// WORKS
booksController.addBook = (req, res, next) => {
  console.log('here');
  // add book here
  console.log(req.body);
  models.Book.create(req.body)
    .then((data) => {
      return next();
    })
    .catch((err) => {
      console.log('error', err);
      return next(err);
    });
};

// WORKS
booksController.deleteBook = (req, res, next) => {
  // delete book here
  // get book from query parameter
  const { book } = req.params;
  console.log(book);
  // query request to db - select book that matches book from query parameter
  models.Book.deleteOne({ title: book })
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => {
      console.log('error', err);
      return next(err);
    });
};

module.exports = booksController;
