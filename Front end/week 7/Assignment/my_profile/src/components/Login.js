import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from "./DarkModeTogle";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/Home');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login"> 
      <div id = "navigation">
      <DarkModeToggle/>
      <p>
        Username: user
        <br></br>
        Password: password
      </p>
      </div>
      <div id="login-container">
      <form id="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
