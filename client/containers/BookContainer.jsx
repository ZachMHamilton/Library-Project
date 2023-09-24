import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList.jsx';
import { TextField, Box, Button, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const BooksContainer = ({ user, logIn }) => {
  // create state variables
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState('');

  // capitalize first letter of user
  const name = user[0].toUpperCase() + user.substring(1);
  // make post request when add book is created
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
      // update state
      .then((response) => response.json())
      .then((newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
      })
      // erros
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  // make delete request when delete button is clicked
  const deleteBook = (e) => {
    console.log(title);
    fetch('../api/books', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
      }),
    })
      // call getBooks to update screen
      .then((response) => {
        getBooks();
      })
      // err
      .catch((err) => {
        console.log('err in deleteBook', err);
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

  // render books on initial load
  useEffect(() => {
    getBooks();
  }, []);

  // Material UI form
  return (
    <div id="booksContainer">
      <div id="logout">
        <Tooltip title="Logout">
          <IconButton
            size="small"
            sx={{
              width: '2em',
            }}
            onClick={() => logIn(false)}
          >
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </div>
      <h2>{name}'s Library</h2>
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
          variant="standard"
          type="text"
          value={title}
          name="title"
          size="small"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Author"
          variant="standard"
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
      <BookList books={books} deleteBook={deleteBook} setTitle={setTitle} />
    </div>
  );
};

export default BooksContainer;
