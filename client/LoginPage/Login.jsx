import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

const Login = ({ logIn, setUsername }) => {
  // create state vars
  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState('');

  // make post request when users log in
  const handleLogin = (e) => {
    e.preventDefault();
    fetch('../api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      // modify state (in APP) to set isLoggedIn to true
      .then((response) => {
        if (response.ok) {
          setUsername(username);
          logIn(true);
        } else {
          setMessage('Username or password does not match. Try again!');
        }
      })
      // errors
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignup = (e) => {
    fetch('../api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Successfully signed up!');
        } else {
          setMessage('Error signing up. Try again!');
        }
      })
      // errors
      .catch((err) => {
        console.log(err);
      });
  };

  // Material UI
  return (
    <div id="login">
      <h1
        style={{
          position: 'absolute',
          left: '50%',
          top: '10%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Welcome To Shelved - Your Online Bookshelf!
      </h1>
      <p
        id="messageDiv"
        style={{
          position: 'absolute',
          left: '50%',
          top: '20%',
          transform: 'translate(-50%, -50%)',
          visibility: message ? 'visible' : 'hidden',
        }}
      >
        {message}
      </p>
      <Box
        component="form"
        sx={{
          border: '1px solid lightgrey',
          borderRadius: 2,
          p: 3,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'white',
          boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, .4)',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          sx={{
            width: 400,
          }}
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="loginButtons">
          <Button
            onClick={(e) => handleLogin(e)}
            variant="contained"
            sx={{ mt: 3, mb: 2, width: 150 }}
          >
            Sign In
          </Button>
          <Button
            onClick={(e) => handleSignup(e)}
            variant="outlined"
            sx={{ mt: 3, mb: 2, width: 150 }}
          >
            Sign Up
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
