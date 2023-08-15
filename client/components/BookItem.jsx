import React from 'react';

const BookItem = (props) => {
  const { title } = props;
  return <div id="book">{title}</div>;
};

export default BookItem;
