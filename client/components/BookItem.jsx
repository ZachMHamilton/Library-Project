import React, { useState } from 'react';
import PopUp from './PopUp.jsx';

const BookItem = (props) => {
  // destucture from props
  const { title, bookDetails, deleteBook, setTitle } = props;

  // useState to toggle modal, false by default
  const [open, openModal] = useState(false);

  // handles clicks on each book and opens their modal
  const popup = () => {
    openModal(true);
    setTitle(title);
  };

  // handles click on close button to close modal
  const closePopup = () => {
    openModal(false);
  };



  // print title
  // pass down stuff on props
  return (
    <div id="randomColor">
      <div id="book" onClick={popup}>
        {title}
      </div>
      <PopUp
        title={title}
        bookDetails={bookDetails}
        open={open}
        close={closePopup}
        deleteBook={deleteBook}
      />
    </div>
  );
};

export default BookItem;
