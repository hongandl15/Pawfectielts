import React from 'react';
import { Link } from 'react-router-dom'
function TestResultCard(props) {
  return (
    <Link 
    to={{
        pathname: "/exam/result/" + props.data.id,
        state: {testResultId: props.data.id}
    }}>
        <div className='test_result_card'>
          <p>{props.order}</p>
          <p>{props.data.testName}</p>
          <p>Score: {props.data.score}</p>
          <p>Right Answers: {props.data.rightAnswer}/40</p>
          <p>{props.data.create_at}</p>
        </div>
    </Link>
  );
}

export default TestResultCard;
