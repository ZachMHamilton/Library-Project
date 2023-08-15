import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div id="login">
      <div id="formcontainer">
        <form id="login-form">
          <div className="form-group">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
        </form>
        <div id="buttons">
          <button id="login-button" type="button" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
      <button id="signup-button" type="button" onClick={handleLogin}>
        Sign Up
      </button>
    </div>
  );
};

export default Login;
