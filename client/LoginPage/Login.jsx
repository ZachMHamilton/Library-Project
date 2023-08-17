import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

const Login = ({ logIn }) => {
  // create state vars
  const [username, setUser] = useState();
  const [password, setPassword] = useState();

  // make post request when users log in
  const handleLogin = (e) => {
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
        logIn(true);
      })
      // errors
      .catch((err) => {
        console.log('error logging in');
        console.log(err);
      });
  };

  // Material UI
  return (
    <div id="login">
      <Box
        component="form"
        sx={{
          border: '1px solid lightgrey',
          borderRadius: 2,
          p: 5,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'white',
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
            onClick={(e) => handleLogin(e)}
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
