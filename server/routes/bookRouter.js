const express = require('express');

// require controller here
const booksController = require('../controllers/booksController');

const router = express.Router();

// GET - retrieves all books in a users library
router.get('/', booksController.getBooks, (req, res) => {
  // will send data back to client
});

// POST - allows user to add a book
router.post('/:book', booksController.addBook, (req, res) => {
  // will update DB
  // rerender page with updated list
});

// DELETE - allows user to delete a book
router.delete('/:book', booksController.deleteBook, (req, res) => {
  // will update DB
  // rerender page with updated list
});
