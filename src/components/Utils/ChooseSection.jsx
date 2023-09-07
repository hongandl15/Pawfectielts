import React, {useEffect, useState } from 'react';
import {Button} from '@mui/material'
import Test from '../Test/Test'; 
import Answer, { AnswerSpeaking } from '../Answer';
import { AnswerWriting } from '../Answer';

const ChooseSection = (props) => {

  const [listpart, setListPart] = useState([]);

  useEffect(() => {
    fetch('https://pawfectielts.onrender.com/part/get/'+ props.testid)
      .then(response => response.json())
      .then(data => {
        setListPart(data);
        setSelectedWindow(data[0].id)
        console.log("list part" + data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);  // Include 

  const [selectedWindow, setSelectedWindow] = useState();
  const handleWindowClick = (windowName) => {
    setSelectedWindow(windowName);
  };


  return (
    <>
      <div className='TestDetail'>    
        <h1>{props.testname}</h1>
        <div className='TestDetail_option'>

        {listpart && listpart.map((part) => (
          <React.Fragment key={`part-${part.id}`}>
          {props.testskill == 'reading' &&
            <button key={"partreading" + part.id} onClick={() => handleWindowClick(part.id)}>
                Passage {part.order}
            </button>
          }

          {props.testskill == 'listening' &&
            <button key={"partlistening" + part.id} onClick={() => handleWindowClick(part.id)}>
                Recording {part.order}
            </button>
          }

          {props.testskill == 'writing' &&
            <button key={"partwriting" + part.id} onClick={() => handleWindowClick(part.id)}>
                Task {part.order}
            </button>
          }

          {props.testskill == 'speaking' &&
            <button key={"partspeaking" + part.id} onClick={() => handleWindowClick(part.id)}>
                Part {part.order}
            </button>
          }
          
          </React.Fragment>
        ))}

          {/* <button onClick={() => handleWindowClick(2)}>Passage 2</button>
          <button onClick={() => handleWindowClick(3)}>Passage 3</button>  */}
        </div>
          <Button variant="contained">
              Thoát
          </Button>
      </div>
      {listpart && listpart.map((part) => (
        selectedWindow == part.id  && 
        <>
          <Test key={"test" + selectedWindow} testid = {props.testid} passage={part.order} /> 
          {props.testskill == 'reading' &&
            <Answer key={"answer" + selectedWindow}  partid={selectedWindow} testid = {props.testid}  partorder ={part.order} />
          }

          {props.testskill == 'listening' &&
            <Answer key={"answer" + selectedWindow}  partid={selectedWindow} testid = {props.testid} partorder ={part.order}/>
          }

          {props.testskill == 'writing' &&
            <AnswerWriting key={"answerwriting" + selectedWindow} listpart = {listpart} partcontent={part.content} partid={selectedWindow} testid = {props.testid} partorder ={part.order}/>
          }

          {props.testskill == 'speaking' &&
            <AnswerSpeaking key={"answerspeaking" + selectedWindow}  listpart = {listpart} partcontent={part.content} partid={selectedWindow} testid = {props.testid} partorder ={part.order}/>
          }

        </>
        ))}

    </>
  );
};

export default ChooseSection;



