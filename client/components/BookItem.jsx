import React, { useState } from 'react';
import PopUp from './PopUp.jsx';

const BookItem = (props) => {
  const { title, bookDetails, deleteBook } = props;
  const [open, openModal] = useState(false);

  const popup = () => {
    console.log('clicked');
    openModal(true);
  };

  const closePopup = () => {
    openModal(false);
  };

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
