// require DB here

const booksController = {};

booksController.getBooks = (req, res, next) => {
  // get all user books from DB here
  // query request to db - select all books where user matches 
  // SELECT * FROM books 
}
booksController.addBook = (req, res, next) => {
  // add book here
  // needs to match current user
  // INSERT INTO books
}
booksController.deleteBook = (req, res, next) => {
  // delete book here
  // query request to db - select book that matches book from query parameter
  // needs to match current user
  // DELETE FROM books WHERE 
}

module.exports = booksController;