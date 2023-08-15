import React from 'react';
import BookItem from './BookItem.jsx';

const BookList = (props) => {
  // get books from props
  const { books } = props;

  // create array
  const booksRender = [];
  for (let i = 0; i < books.length; i++) {
    // pass title down to bookItem to be displayed
    booksRender.push(<BookItem key={i} title={books[i].title} />);
  }

  return <div id="bookList">{booksRender}</div>;
};

export default BookList;
