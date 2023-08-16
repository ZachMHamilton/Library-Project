import React, { useState } from 'react';
import PopUp from './PopUp.jsx';

const BookItem = (props) => {
  const { title, bookDetails } = props;
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
      />
    </div>
  );
};

export default BookItem;
