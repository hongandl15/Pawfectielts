import React, { useState } from 'react';

const PartSelector = ({ onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueSelect = (value) => {
    setSelectedValue(value);
    onSelect(value); // Call the provided onSelect callback with the selected value
  };

  return (
    <div className='TestDetail'>    
        <div className='TestDetail_option'>
        <button className={selectedValue == 1 ? 'activeButton' : ''}
         onClick={() => handleValueSelect(1)}>Select Value 1</button>
        <button className={selectedValue == 2 ? 'activeButton' : ''} onClick={() => handleValueSelect(2)}>Select Value 2</button>
        <button className={selectedValue == 3 ? 'activeButton' : ''} onClick={() => handleValueSelect(3)}>Select Value 3</button>
        <p>Selected Value: {selectedValue}</p>
        </div>
    </div>
  );
};

export default PartSelector;
