import React, { useState } from 'react';

const AddTest = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (onInputChange) {
      onInputChange(newValue); // Call the callback with the new value
    }
  };

  return (
    <div className='add_test_name'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhập tên của bài test"
        required
      />
      
    </div>
  );
};

export default AddTest;

