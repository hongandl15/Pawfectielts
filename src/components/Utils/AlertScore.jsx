import React from 'react';

const AlertScore = ({ type, message }) => {
  return (
    <div className={`alert-score`} role="alert">
      {message}
    </div>
  );
};

export default AlertScore;