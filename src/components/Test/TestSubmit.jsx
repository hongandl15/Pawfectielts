import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material'
// import { useHistory } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom'


const TestSubmit = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleConfirmSubmit = async () => {
  const isConfirmed = window.confirm("Bạn có chắc chắn muốn nộp bài?");
  const userId = JSON.parse(sessionStorage.getItem('user')).id
    if (isConfirmed) {
      setIsSubmitting(true);

      try {
        const response = await fetch('http://localhost:8888/result/checkResult/' + props.testid + "?userId=" + userId, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: sessionStorage.getItem('ieltsAnswersSubmit'),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const testResultId = data.id;

        console.log(testResultId); // Output the testResultId for debugging

        sessionStorage.removeItem('ieltsAnswers');
        sessionStorage.removeItem('ieltsAnswersSubmit');

        history.push({
          pathname: "/exam/result/" + testResultId,
          state: {
            id: props.testid,
            testResultId: testResultId
          }
        });
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };


  return (
    <div className='TestSubmit'>
      <div className='TestSubmit_time'>
        <p>Thời gian làm bài:</p>
        <CountdownTimer />
        <Button variant="contained" onClick={handleConfirmSubmit} disabled={isSubmitting}>
          Nộp bài
        </Button>
      </div>
      <p className='TestSubmit_notice'>
        Chú ý: bạn có thể click vào số thứ tự câu hỏi trong bài để đánh dấu review
      </p>
      {/* <NumberList /> */}

    </div>
  )
}
export default TestSubmit



export const NumberList = () => {
  const [selectedNumber, setSelectedNumber] = useState();

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };

  const renderNumbers = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    return numbers.map((number) => (
      <li
        key={number}
        className={selectedNumber === number ? 'number-item active' : 'number-item'}
        onClick={() => handleNumberClick(number)}
      >
        {number}
      </li>
    ));
  };

  return (
    <>
      <div>
        <h3>Passage</h3>
        <ul className="number-list">
          {renderNumbers()}
        </ul>
      </div>
      <div>
        <h3>Passage</h3>
        <ul className="number-list">
          {renderNumbers()}
        </ul>
      </div>
      <div>
        <h3>Passage</h3>
        <ul className="number-list">
          {renderNumbers()}
        </ul>
      </div>
    </>
  );
};


export const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(interval);
          // Timer has reached 0 minutes and 0 seconds
          alert("Time's up!"); // Display alert message
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  return (
    <h3>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</h3>
  );
};


