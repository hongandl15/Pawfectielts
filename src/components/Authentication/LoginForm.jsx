import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://pawfectielts.onrender.com/api/login?username=${username}&password=${password}`, {method: 'POST'});
      const data = await response.json();

      if (response.ok) {
        // Save relevant information to session storage
        sessionStorage.setItem('userID', data.userID);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('phone', data.phone);

        // Clear any previous error messages
        setErrorMessage('');
        history.push('/');
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
        alert('sai thong tin dang nhap')
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('sai thong tin dang nhap')
    }
  };

  return (
    <div className='login-form'>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
