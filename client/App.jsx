import React, { useEffect, useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Login from './LoginPage/Login.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const App = () => {
  // const [isLoggedIn, logIn] = useState(false);
  // const isLoggedIn = false;
  const isLoggedIn = true;
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <MainContainer />
              ) : (
                <Navigate replace to={'/login'} />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <Login logIn={'logIn'} />
              ) : (
                <Navigate replace to={'/'} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
