const express = require('express');

// require controller here
const booksController = require('../controllers/booksController');

const router = express.Router();

// GET - retrieves all books in a users library
router.get('/', booksController.getBooks, (req, res) => {
  // will send data back to client
  return res.status(200).json(res.locals.books);
});

// POST - allows user to add a book
router.post(
  '/',
  booksController.getDetails,
  booksController.addBook,
  (req, res) => {
    // will update DB
    return res.status(200).json(res.locals.newBook);
  }
);

// DELETE - allows user to delete a book
router.delete('/:book', booksController.deleteBook, (req, res) => {
  // will update DB
  return res.sendStatus(200);
});

module.exports = router;
