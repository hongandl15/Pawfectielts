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
    <div>
      <h2>Add a New Set</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="setName">Set Name:</label>
          <input
            type="text"
            id="setName"
            value={setName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Add Set</button>
        </div>
      </form>
    </div>
  );
}

export default AddSet;
