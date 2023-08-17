import React from 'react';
import BookItem from './BookItem.jsx';

const BookList = (props) => {
  // get books from props
  const { books, deleteBook, setTitle } = props;

  // randomly choose color from array
  // apply to book
  const colors = [
    '#9A9EA1',
    '#605E5F',
    '#8A7F7D',
    '#B29B89',
    '#ABB4AE',
    '#2C4838',
    '#BF9E99',
    '#8A7F7D',
    '#8D6D62',
    '#956761',
    '#DCD2C9',
    '#728B7E',
    '#4A7057',
    '#949599',
    '#605E5F',
    '#C4AFA7',
    '#8A735F',
    '#2E3732',
    '#453528',
    '#A39182',
    '#7D83DD',
    '#DCD2C9',
    '#D3A6A1',
    '#AEABA6',
    '#536E60',
  ];

  // create array
  const booksRender = [];
  // create component for each book
  for (let i = 0; i < books.length; i++) {
    // pass down stuff to each item via props
    booksRender.push(
      <div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * 25)],
          borderRadius: '5px',
        }}
        key={i}
      >
        <BookItem
          key={i}
          title={books[i].title}
          bookDetails={books[i]}
          deleteBook={deleteBook}
          setTitle={setTitle}
        />
      </div>
    );
  }

  return <div id="bookList">{booksRender}</div>;
};

export default BookList;
