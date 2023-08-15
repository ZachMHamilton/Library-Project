// require DB here
const models = require('../models/booksModel');

const booksController = {};

const mongoose = require('mongoose');

booksController.getBooks = (req, res, next) => {
  console.log('here1');
  // get all user books from DB here
  models.Book.find()
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => {
      console.log('error', err);
      return next(err);
    });
};

booksController.addBook = (req, res, next) => {
  // add book here
  console.log(req.body);
  models.Book.create(req.body)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => {
      console.log('error', err);
      return next(err);
    });
};
// booksController.deleteBook = (req, res, next) => {
//   // delete book here
//   // query request to db - select book that matches book from query parameter
//   // needs to match current user
//   // DELETE FROM books WHERE
// };

module.exports = booksController;
