import React from 'react';

const BookItem = (props) => {
  const { title, bookDetails } = props;
  console.log(bookDetails);
  const popup = () => {
    window.alert(title);
  };

  return (
    <div id="book" onClick={popup}>
      {title}
    </div>
  );
};

export default BookItem;
