// require DB here
const models = require('../models/booksModel');

const booksController = {};

/////////////////////////////////////////////
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
  // add book here
  // get details from locals obj
  const { bookDetails } = res.locals;

  // create book in DB
  models.Book.create(bookDetails)
    .then((data) => {
      res.locals.newBook = data;
      return next();
    })
    .catch((err) => {
      console.error('Error inserting book:', err);
      return next(err);
    });
};

// WORKS
booksController.deleteBook = (req, res, next) => {
  // delete book here
  // get book from query parameter
  const { book } = req.params;
  // query request to db - select book that matches book from query parameter
  models.Book.deleteOne({ title: book })
    .then((data) => {
      return next();
    })
    .catch((err) => {
      console.log('error', err);
      return next(err);
    });
};

// WORKS
booksController.getDetails = (req, res, next) => {
  // get title and author from user input
  const { title, author } = req.body;

  // build url
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:"${title}"+inauthor:"${author}"&key=AIzaSyAXXHtUzz8RqMgLK-n-6qYqURB2X7c-rZM`;
  // Fetch and process Google Books API data

  // fetch from API
  fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      // extract book details
      const bookDetails = data.items[0].volumeInfo;
      console.log(bookDetails);
      // add to locals to pass to next middleware
      res.locals.bookDetails = bookDetails;
      return next();
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
      return next(err);
    });
};

module.exports = booksController;
