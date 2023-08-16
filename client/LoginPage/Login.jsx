import React, { useState } from 'react';

const Login = ({ logIn }) => {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    // fetch('../api/users/login', {
    //   type: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   }),
    // })
    //   .then((response) => {
    //     console.log('response recieved');
    //   })
    //   .catch((err) => {
    //     console.log('error logging in');
    //   });
    logIn(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={(e) => handleLogin(e)}>Login</button>
    </div>
  );
};

export default Login;
