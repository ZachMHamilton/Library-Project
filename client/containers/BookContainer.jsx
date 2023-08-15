import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList.jsx';

const BooksContainer = () => {
  // create state variables
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState('');

  // handle click to add book
  // make fetch request to backend
  // get request
  const handleClick = async () => {
    const response = await fetch('../api/books/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        author: author,
      }),
    });
  };

  // fetch data from backend to display on frontend
  // const getBooks = async () => {
  //   try {
  //     const response = await fetch('../api/books/', {
  //       method: 'GET',
  //     });
  //     // Parse the response to get the data
  //     const data = await response.json();
  //     // Store the data in the state
  //     setBooks(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch('../api/books/', {
          method: 'GET',
        });
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the getBooks function to fetch and update the books state
    getBooks();
  }, []); // Empty dependency array means this effect runs once after the component mounts

  // pass down via props to BookList

  return (
    <div id="booksContainer">
      <h2>My Library</h2>
      <form>
        <label for="title">Title: </label>
        <input
          type="text"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label for="author">Author: </label>
        <input
          type="text"
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <button onClick={handleClick}>Add Book</button>
      </form>
      <BookList books={books} />
    </div>
  );
};

export default BooksContainer;
