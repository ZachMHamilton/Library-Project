import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList.jsx';

const BooksContainer = () => {
  // create state variables
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState('');

  const handleClick = () => {
    fetch('../api/books/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        author: author,
      }),
    })
      .then(() => {
        getBooks();
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  // fetch data from backend to display on frontend
  const getBooks = () => {
    fetch('../api/books/', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  getBooks();

  // useEffect(() => {
  //   getBooks();
  // }, []);

  return (
    <div id="booksContainer">
      <h2>My Library</h2>
      <form>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label htmlFor="author">Author: </label>
        <input
          type="text"
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <button onClick={() => handleClick()}>Add Book</button>
      </form>
      <BookList books={books} />
    </div>
  );
};

export default BooksContainer;
