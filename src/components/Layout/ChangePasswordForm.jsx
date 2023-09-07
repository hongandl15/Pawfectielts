import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Alert from '../Utils/Alert';
const ChangePasswordForm = () => {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 3000); // Adjust the time interval (in milliseconds)
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [alert]);

  const [requestPassword, setRequestPassword] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const userid = JSON.parse(sessionStorage.getItem('user')).id

  const handleSubmit =  async(e) => {
    e.preventDefault();

    try {
      const response = await axios.put('https://pawfectielts.onrender.com/user/change-password/' + userid, requestPassword);
      console.log(response.data);
      setAlert({ type: 'success', message: 'Password changed successfully.' });
      // Reset the form after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      setAlert({ type: 'danger', message: 'An error occurred while changing the password.' });
    }
  
    setRequestPassword({
      currentPassword: '',
      newPassword: '',
    })
    // Perform the password change logic here, e.g. send a request to your backend API.

    // Reset the form fields
  };

  return (
    <div className='register-form'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <h2 className="card-title text-center">Đổi mật khẩu</h2>
              <div className="card-body py-md-4">
                <form _lpchecked="1" onSubmit={handleSubmit}>
                  <div className="form-group">
                  <input
                  className="form-control"
                      type="password"
                      id="currentPassword"
                      name='currentPassword'
                      value={requestPassword.currentPassword}
                      onChange={(e) => setRequestPassword({
                                    ...requestPassword,
                                    currentPassword: e.target.value,
                                  })}
                      required
                      placeholder='Mật khẩu cũ'
                    />
                  </div>
                  <div className="form-group">
                        <input
                        className="form-control"
                          type="password"
                          id="newPassword"
                          name='password'
                          value={requestPassword.newPassword}
                          onChange={(e) =>     setRequestPassword({
                            ...requestPassword,
                            newPassword: e.target.value,
                          })}
                          required
                          placeholder='Mật khẩu mới'
                        />
                  </div>
                  {/* <div className="form-group">
                         <input
                         className="form-control"
                            type="password"
                            id="confirmPassword"
                            value={requestPassword.password}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder='Nhập lại mật khẩu'
                          />
                  </div> */}

                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <button className="btn btn-primary" type='submit'>Đổi mật khẩu</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {alert && <Alert type={alert.type} message={alert.message} />}
    </div>
  );
};

export default ChangePasswordForm;
