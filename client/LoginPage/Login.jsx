import React, { useState } from 'react';
import { TextField, Box, Button, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Login = ({ logIn, setUsername }) => {
  // create state vars
  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState('');
  const [action, setAction] = useState('Login');
  const [signUp, setSignUp] = useState(false);

  // make post request when users log in
  const handleLogin = (e) => {
    if (signUp) {
      setSignUp(false);
      setAction('Login');
      return;
    }
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
  const handleSignUp = (e) => {
    if (!signUp) {
      setSignUp(true);
      setAction('Sign Up');
      return;
    }
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
          top: '26%',
          transform: 'translate(-50%, -50%)',
          color: 'red',
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
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'white',
          boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, .4)',
          height: '50%',
        }}
      >
        <IconButton
          sx={{
            pl: 1,
            pr: 0,
            m: 0,
            left: '4%',
            top: '2.5%',
            position: 'absolute',
            visibility: action === 'Sign Up' ? 'visible' : 'hidden',
          }}
          size="small"
          onClick={(e) => handleLogin(e)}
        >
          <ArrowBackIosIcon sx={{ p: 0, m: 0 }} fontSize="small" />
        </IconButton>
        <h2>{action}</h2>
        <TextField
          id="outlined-basic1"
          label="Username"
          variant="outlined"
          sx={{
            width: 400,
          }}
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          id="outlined-basic2"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {signUp && (
          <TextField
            id="outlined-basic3"
            label="Confirm Password"
            variant="outlined"
            type="text"
          />
        )}
        <div id="loginButtons">
          <Button
            onClick={(e) => handleLogin(e)}
            variant="contained"
            fullWidth="true"
            sx={{ mt: 3, mb: 2 }}
          >
            {action}
          </Button>
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              visibility: action === 'Login' ? 'visible' : 'hidden',
            }}
          >
            Need an account?&nbsp;
            <a id="link" href="#" onClick={(e) => handleSignUp(e)}>
              Sign Up
            </a>
          </span>
        </div>
      </Box>
    </div>
  );
};

export default Login;
