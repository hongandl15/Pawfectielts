import React from 'react';

const Alert = ({ type, message }) => {
  return (
    <div className={`mt-5 w-50 m-auto alert alert-${type}` } role="alert">
      {message}
    </div>
  );
};

export default Alert;