// src/ModalWindow.js
import React from 'react';

const ModalWindow = ({ show }) => {
    if (!show) return show;
  
  return (
    <div className={`note ${show ? 'show' : ''}`}>
         <textarea
        name=""
        id=""
        placeholder="Viết dàn ý cho bài"
      ></textarea>
    </div>
  );
};

export default ModalWindow;