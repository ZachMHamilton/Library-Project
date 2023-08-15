import React from 'react';

const BookItem = (props) => {
  const { title } = props;

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
