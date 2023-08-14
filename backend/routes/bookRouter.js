const express = require('express');

// require controller here
const booksController = require('../controllers/booksController');

const router = express.Router();

// GET - retrieves all books in a users library
router.get('/', (req, res) => {});

// POST - allows user to add a book

// DELETE - allows user to delete a book
