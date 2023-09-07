import React from 'react';
import { useHistory } from 'react-router-dom'

const LogoutPopup = ({ onClose, onLogout }) => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      const response = await fetch(`https://pawfectielts.onrender.com/user/logout`, {method: 'POST'});

      if (response.ok) {
        // Save relevant information to session storage
        onLogout();
        onClose();
        sessionStorage.removeItem('user');
        window.alert("Đăng xuất thành công")
        history.push({
          pathname: "/home" 
        });
      } else {
        window.alert("Đăng xuất thất bại")
      }
    } catch (error) {
    }


  };

  return (
    <div className="overlay ">
      <div className="popup bg-light">
        <button className='m-2 close-button' onClick={onClose}>X</button>
        <h2 className='text-success'>Logout</h2>
        <p className='text-warning'>Are you sure you want to logout?</p>
        <button className='mr-2 text-danger'onClick={handleLogout}>Logout</button>

      </div>
    </div>
  );
};

export default LogoutPopup;
