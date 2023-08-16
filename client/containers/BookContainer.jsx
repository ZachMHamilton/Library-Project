import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList.jsx';
import { TextField, Box, Button } from '@mui/material';

const BooksContainer = () => {
  // create state variables
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    fetch('../api/books/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        author,
      }),
    })
      .then((response) => response.json())
      .then((newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  const deleteBook = (e) => {
    fetch('../api/books', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
      }),
    })
      .then((response) => {
        console.log('deleted successfully');
        getBooks();
      })
      .catch((err) => {
        console.log('err in container', err);
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

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div id="booksContainer">
      <h2>My Library</h2>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <TextField
          label="Title"
          variant="filled"
          type="text"
          value={title}
          name="title"
          size="small"
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Author"
          variant="filled"
          type="text"
          value={author}
          name="author"
          size="small"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button
          onClick={(e) => handleClick(e)}
          variant="contained"
          size="small"
        >
          Add Book
        </Button>
      </Box>
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default BooksContainer;
