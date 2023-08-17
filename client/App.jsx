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
  // state to keep track of login
  // const [isLoggedIn, logIn] = useState(false);
  const isLoggedIn = true;

  // react router
  // using conditional routing
  // '/' if isLoggedIn = true: render MainContainer; else: navigate to login
  // '/login' if isLoggedIn = false: render login page; else: navigate to home page '/'
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
                <Login logIn="logIn" />
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
