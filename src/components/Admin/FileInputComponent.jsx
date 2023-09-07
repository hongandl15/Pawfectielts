import React, { useState } from 'react';

const FileInputComponent = ({onChange} ) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onChange(file); 
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          <p>File size: {selectedFile.size} bytes</p>
        </div>
      )}
    </div>
  );
};

export default FileInputComponent;