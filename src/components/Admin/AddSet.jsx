import React, { useState } from 'react';
import axios from 'axios';

function AddSet({ onSetAdded }) {
  const [setName, setSetName] = useState('');

  const handleInputChange = (event) => {
    setSetName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://pawfectielts.onrender.com/admin/addset', {
        name: setName,
      });
      // Handle success or show a message to the user
      console.log('Set added successfully:', response.data);
      // Clear the input field after submission
      setSetName('');

      // Trigger the callback function to notify the parent component
      onSetAdded();
    } catch (error) {
      // Handle error or show an error message to the user
      console.error('Error adding set:', error);
    }
  };

  return (
    <div className='addSet'>
      <h2>Add a New Set</h2>
      <form className='d-flex' onSubmit={handleSubmit}>
        <div className='mr-2'>
          <label htmlFor="setName">Set Name: </label>
          <input
            type="text"
            id="setName"
            value={setName}
            onChange={handleInputChange}
          />
        </div>

        <div className='m-2 addsetbtn'>
          <button type="submit">Thêm Set mới</button>
        </div>
      </form>
    </div>
  );
}

export default AddSet;
