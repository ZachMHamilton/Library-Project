import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

const Login = ({ logIn }) => {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    // e.preventDefault();
    fetch('../api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        logIn(true);
      })
      .catch((err) => {
        console.log('error logging in');
        console.log(err);
      });
  };

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
        <Button
          onClick={(e) => handleLogin(e)}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
};

export default Login;
