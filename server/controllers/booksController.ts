// require DB here
const models = require('../models/booksModel');
import { NextFunction, Request, Response } from "express";

const booksController = {
  getBooks: (req: Request, res: Response, next: NextFunction) => {
    // add to bookDetails object
    // get user from cookie
    const user: string = req.cookies.USERssid;
  
    // get all user books from DB here
    // find books by user = userssid
    models.Book.find({ user: user })
      .then((data: Object) => {
        // add data to locals
        res.locals.books = data;
        return next();
      })
      .catch((err: Error) => {
        console.log('error', err);
        return next(err);
      });
  },
  
  // WORKS
  addBook: (req: Request, res: Response, next: NextFunction) => {
    // add book here
    // get details from locals obj
    const { bookDetails } = res.locals;
    // get user
    const user = req.cookies.USERssid;
    // add to bookDetails object
    bookDetails.user = user;
    // create book in DB
    models.Book.create(bookDetails)
      .then((data: Object) => {
        res.locals.newBook = data;
        return next();
      })
      .catch((err: Error) => {
        console.error('Error inserting book:', err);
        return next(err);
      });
  },
  
  // WORKS
  deleteBook: (req: Request, res: Response, next: NextFunction) => {
    // delete book here
    // get book from req.body
    const title: string = req.body.title;
    const user: string = req.cookies.USERssid;
    // to db - select book that matches book from body
    models.Book.deleteOne({ title: title, user: user })
      .then((data: Object) => {
        return next();
      })
      .catch((err: Error) => {
        console.log('error', err);
        return next(err);
      });
  },
  
  // WORKS
  getDetails: (req: Request, res: Response, next: NextFunction) => {
    // get title and author from user input
    const title: string = req.body.title;
    const author: string = req.body.author;
  
    // build url using title and author
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:"${title}"+inauthor:"${author}"&key=AIzaSyAXXHtUzz8RqMgLK-n-6qYqURB2X7c-rZM`;
  
    // fetch from Google Books API
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // extract book details
        const bookDetails: Object = data.items[0].volumeInfo;
        // add to locals to pass to next middleware
        res.locals.bookDetails = bookDetails;
        return next();
      })
      .catch((err: Error) => {
        console.error('Error fetching data:', err);
        return next(err);
      });
  },
};


module.exports = booksController;