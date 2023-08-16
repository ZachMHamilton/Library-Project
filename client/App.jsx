import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
