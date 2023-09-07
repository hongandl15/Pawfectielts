import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const LoginPopup = ({ onClose, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();


  const handleLogin = async () => {
    // Here you can add your authentication logic
    // For simplicity, let's assume successful login and store the username in sessionStorage
    try {
        const response = await fetch(`https://pawfectielts.onrender.com/api/login?username=${username}&password=${password}`, {method: 'POST'});
        const data = await response.json();
  
        if (response.ok) {
          // Save relevant information to session storage
          onLogin(JSON.stringify(data));
          onClose();
          window.alert("Đăng nhập thành công")
          if(data.role == "USER")
            history.push({pathname: "/" });
          else if(data.role == "ADMIN")
            history.push({pathname: "/admin" });
        } else {
          setErrorMessage('Login failed. Please check your credentials.');
          window.alert('sai thong tin dang nhap')
        }
      } catch (error) {
        console.error('An error occurred:', error);
        window.alert('Sai thông tin đăng nhập')
      }

  };

  return (
    <div className="overlay">
      <div className="popup bg-dark">
      <button className='m-3 close-button' onClick={onClose}>X</button>
        <h2 className='text-warning'>Login</h2>
        <input
        className='m-1 p-2'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
         className='m-1 p-2'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='m-3 text-warning'onClick={handleLogin}>Login</button>

      </div>
    </div>
  );
};

export default LoginPopup;
