import React from 'react';
import { useHistory } from 'react-router-dom'

const LogoutPopup = ({ onClose, onLogout }) => {
  const history = useHistory();
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    onLogout();
    onClose();
    window.alert("Đăng xuất thành công")
    history.push({
      pathname: "/" 
    });
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
