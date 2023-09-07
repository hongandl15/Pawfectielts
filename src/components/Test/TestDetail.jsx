import React, { useState } from 'react';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'

const TestDetail = (props) => {
  const [selectedWindow, setSelectedWindow] = useState('window1');

  const handleWindowClick = (windowName) => {
    setSelectedWindow(windowName);
  };

  return (
    <div className='TestDetail'>
      <h1>{props.test.name}</h1>
      <div className='TestDetail_option'>
        <button onClick={() => handleWindowClick('window1')}>Thông tin đề thi</button>
        <button onClick={() => handleWindowClick('window2')}>Đáp án/transcript</button>
      </div>

      {/* Conditional rendering based on selected option */}
      {selectedWindow === 'window1' && <TestInfo test={props.test} />}
      {selectedWindow === 'window2' && <Window2 test={props.test}/>}
    </div>
  );
};

// Replace Window1, Window2, and Window3 with your own components for the specific content you want to display in each window.


const TestInfo = (props) => {

  return (
    <div className='TestInfo'>
      <div>
        <h3>Bộ đề thi: {props.test.set.name}</h3>
          <p>Kỹ năng: {props.test.skill.name}</p>
        <p className='notice'>Chú ý: Kỹ năng writing và speaking sẽ được AI chấm điểm tự động</p>
      </div>

      <div>
        {/* <h3>Chọn phần thi bạn muốn làm hoặc</h3> */}
        <Link to={{
              pathname: "/exam/" + props.test.skill.name +'/' + props.test.id,
              state: {id: props.test.id, testname: props.test.name, testskill: props.test.skill.name}
          }}>
          <Button variant="contained">
              Làm bài
          </Button>
        </Link>
      </div>

        {/* <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Passage 1" />
            <FormControlLabel control={<Checkbox />} label="Passage 2" />
            <FormControlLabel control={<Checkbox />} label="Passage 3" />
        </FormGroup>
        <Button variant="contained">
            Làm bài
        </Button> */}
    </div>
  )
}

const Window2 = (props) => {
  return  (
  <Link to={{
      pathname: "/answer/"+ props.test.id,
      state: {testid: props.test.id}
    }}>
    <Button variant="contained">
        Xem đáp án
    </Button>
  </Link>
)};


export default TestDetail;