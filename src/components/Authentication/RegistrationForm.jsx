import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'bootstrap';
import { useHistory } from 'react-router-dom';

const RegistrationForm = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8888/user/register', user);

      if (response.status >= 200 && response.status < 300) {
        // Save relevant information to session storage
        window.alert('Đăng kí thành công')
        console.log(response.data);
        console.error('OK response:', response.status, response.statusText);
        history.push({
          pathname: "/" 
        });
      }
      else{
        window.alert('Đăng kí thất bại')
        console.log(response.data);
        console.error('Non-OK response:', response.status, response.statusText);
      }

      // Reset the form after successful registration
      setUser({
        name: '',
        phone: '',
        email: '',
        username: '',
        password: '',
      });
    } catch (error) {
      alert(error.response.data)
      console.error('Error registering user:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className='register-form'>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <h2 className="card-title text-center">Register</h2>
              <div className="card-body py-md-4">
                <form _lpchecked="1" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" id="name" value={user.name} onChange={handleChange} placeholder="Name"/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" value={user.email} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <input type="phone" className="form-control" name="phone" id="phone" placeholder="Phone"  value={user.phone} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" name="password" id="password" value={user.password} placeholder="Password" onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" name="confirm-password" id="confirm-password" placeholder="Confirm password"/>
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <button className="btn btn-primary" type='submit'>Create Account</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
