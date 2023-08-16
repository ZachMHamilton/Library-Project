import React from 'react';
import BookItem from './BookItem.jsx';

const BookList = (props) => {
  // get books from props
  const { books, deleteBook } = props;
  // create array
  const booksRender = [];
  // create component for each book
  for (let i = 0; i < books.length; i++) {
    // pass down stuff to each item via props
    booksRender.push(
      <BookItem
        key={i}
        title={books[i].title}
        bookDetails={books[i]}
        deleteBook={deleteBook}
      />
    );
  }

  return <div id="bookList">{booksRender}</div>;
};

export default BookList;
