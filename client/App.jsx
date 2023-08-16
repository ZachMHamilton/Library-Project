import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Login from './LoginPage/Login.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const App = () => {
  const loggedIn = false;

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? <MainContainer /> : <Navigate replace to={'/login'} />
            }
          />
          <Route
            path="/login"
            element={!loggedIn ? <Login /> : <Navigate replace to={'/'} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
