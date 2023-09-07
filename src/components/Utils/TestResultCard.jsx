import React from 'react';
import { Link } from 'react-router-dom'
function TestResultCard(props) {
  return (
    <Link 
    to={{
        pathname: "/exam/result/" + props.data.id,
        state: {testResultId: props.data.id}
    }}>
        {/* <div className='test_result_card'>
          <p>{props.order}</p>
          <p>{props.data.testName}</p>
          <p>Score: {props.data.score}</p>
          <p>Right Answers: {props.data.rightAnswer}/40</p>
          <p>{props.data.create_at}</p>
        </div> */}
         <article className="leaderboard__profile">
          {/* <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Mark Zuckerberg"
            className="leaderboard__picture"
          /> */}
          <span className="leaderboard__name">{props.data.testName}</span>
          <span className="leaderboard__value">
             {props.data.score} 
            <span>{props.data.rightAnswer}/4 </span>

          </span>
          <span>{props.data.create_at}</span>
        </article>
    </Link>
  );
}

export default TestResultCard;
