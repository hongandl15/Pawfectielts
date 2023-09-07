import React from 'react';

const SelectComponent = ({ selectedValue, onSelectedChange }) => {
  return (
    <select value={selectedValue} onChange={onSelectedChange}>
      <option value="">Select an option</option>
      <option value="1">Matching headings</option>
      <option value="2">Locating information</option>
      <option value="3">True false not given</option>
    </select>
  );
};

export default SelectComponent;

export const SetSelect = ({ selectedValue, onSelectedChange }) => {
  return (
    <select value={selectedValue} onChange={onSelectedChange}>
      <option value="1">Select an option</option>
      <option value="2">Matching headings</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  );
};


export const QuestionTypeSelect = ({ selectedValue, onSelectedChange }) => {
  return (
    <select value={selectedValue} onChange={onSelectedChange}>
      <option value="1">Select an option</option>
      <option value="2">Matching headings</option>
      <option value="2">Locating information</option>
      <option value="3">True false not given</option>
    </select>
  );
};

