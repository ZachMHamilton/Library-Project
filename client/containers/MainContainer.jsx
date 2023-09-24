import React from 'react';
import BooksContainer from './BookContainer.jsx';

const MainContainer = ({ user, logIn }) => {
  // render books container (user container, wish list container -- stretch)
  return (
    <div id="mainContainer">
      <BooksContainer user={user} logIn={logIn} />
    </div>
  );
};

export default MainContainer;
