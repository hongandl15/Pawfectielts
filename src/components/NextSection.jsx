import React, { useState } from 'react';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import {Button} from '@mui/material'

const NextSection = () => {
  const [selectedWindow, setSelectedWindow] = useState('window1');

  const handleWindowClick = (windowName) => {
    setSelectedWindow(windowName);
  };
  
  const style = {
    display: 'flex',
    justifyContent: "right",
    width: '80%'
  };

  return (
    <div style={style}>    
        <Button variant="contained" style={{fontSize: "20px"}}>
            Tiếp theo
        </Button>

      {/* Conditional rendering based on selected option */}
      {/* selectedWindow === 'window1' && <TestInfo />
      selectedWindow === 'window2' && <Window2 /> */}
    </div>
  );
};

export default NextSection;