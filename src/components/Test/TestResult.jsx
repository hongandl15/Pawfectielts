import React, {useEffect, useState } from 'react';

import { AiFillCheckCircle } from 'react-icons/ai'
import { FaTimesCircle } from 'react-icons/fa'
import { RiForbid2Fill } from 'react-icons/ri'
import ParagraphComponent from '../Utils/ParagraphComponent';


const TestResult = (props) => {
  const [score, setScore] = useState([]);
  useEffect(() => {
    try {
        fetch('https://pawfectielts.onrender.com/result/get/'+ props.testResultId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
          setScore(data);
          console.log(data);
          console.log(props.testResultId)
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
   }, [props.testResultId]);

  return (
    <div className='TestResult-container'>
      <div className='TestResult'>
        <div className='col-12 col-md-3 result'>
          <div class="result-stats-item">
            <span class="result-stats-label">Kết quả làm bài</span>
            <span class="result-stats-text">{score.rightAnswer}/40</span>
          </div>
          {/* <div class="result-stats-item">
            <span class="result-stats-label">Độ chính xác</span>
            <span class="result-stats-text">0.0%</span>
          </div> */}

        </div>
        <div className='col-12 col-md-9'>
          <div className='row'>
            <div className='col'>
              <div className='score_box'>
                <AiFillCheckCircle />
                <div class="result-score-icontext right">Trả lời đúng</div>
                <div class="result-score-text">{score.rightAnswer}</div>
                <div class="result-score-sub"><span>câu hỏi</span></div>
              </div>
            </div>
            <div className='col'>
              <div className='score_box'>
                <FaTimesCircle />
                <div class="result-score-icontext wrong">Trả lời sai</div>
                <div class="result-score-text">{score.wrongAnswer}</div>
                <div class="result-score-sub"><span>câu hỏi</span></div>
              </div>
            </div>
            <div className='col'>
              <div className='score_box'>
                <RiForbid2Fill />
                <div class="result-score-icontext skip">Bỏ qua</div>
                <div class="result-score-text">{score.skipAnswer}</div>
                <div class="result-score-sub"><span>câu hỏi</span></div>
              </div>

            </div>
            <div className='col'>
              <div className='score_box'>
                <RiForbid2Fill />
                <div class="result-score-icontext score">Điểm số</div>
                <div class="result-score-text text-score">{score.score}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <h3>Đáp án:</h3>
      <div class="result-answers-list">
        {score.userAnswers && score.userAnswers.map((item) => (
          <div class="result-answers-item" key={item.orderNumber}>
            <span class="question-number">
              <strong>{item.orderNumber}</strong>
            </span>
            <span>
              <span class="text-answerkey">{item.correctAnswer}</span>:
              {item.answer !== "" ? (
                <i class="mr-1">  {item.answer}</i>
              ):
              (
                <i class="mr-1">  chưa trả lời</i>
              )}
               {item.correct === false ?(
                <span class="text-wrong"> X</span>
              ):
              (
                <span class="text-correct"> J</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResult

export const TestResultPassage = (props) => {
  const [score, setScore] = useState([]);
  useEffect(() => {
    try {
        fetch('https://pawfectielts.onrender.com/result/getPassageResult/'+ props.testResultId)
        // fetch('http://localhost:8888/result/getPassageResult/520')
        .then(response => response.json())
        .then(data => {
          setScore(data.listScore);
          console.log(data);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
   }, [props.testResultId]);

  return (
    <div className='TestResult-container'>
      {score && score.map((individualScore, index) => (
        <>
                <h1 className='m-5'>Task {index+1}</h1>

      <div className='TestResult'>
        <div className='row'>
        <div className='col-12 col-md-12'>
          <div className='row'>
            <div className='col'>
              <div className='score_box'>
                <AiFillCheckCircle />
                <div class="result-score-icontext right">Task Response</div>
                {score &&  
                  <div class="result-score-text">{individualScore.scoreTaskResponse}</div>
                }

  
              </div>
            </div>
            <div className='col'>
              <div className='score_box'>
              <AiFillCheckCircle />
                <div class="result-score-icontext wrong">Coherence & Cohesion</div>
                <div class="result-score-text">{individualScore.scoreCoherence}</div>
              </div>
            </div>
            <div className='col'>
              <div className='score_box'>
              <AiFillCheckCircle />
                <div class="result-score-icontext skip">Lexical Resource</div>
                <div class="result-score-text">{individualScore.scoreLexical}</div>
              </div>
            </div>

            <div className='col'>
              <div className='score_box'>
              <AiFillCheckCircle />
                <div class="result-score-icontext score">Grammatical Range and Accuracy</div>
                <div class="result-score-text ">{individualScore.scoreGrammar}</div>
              </div>
            </div>
            <div className='col'>
              <div className='score_box'>
              <AiFillCheckCircle />
                <div class="result-score-icontext score">Score</div>
                <div class="result-score-text text-score">{individualScore.overallScore}</div>
              </div>
            </div>
          </div>
      </div>
          <div className='col-12'>
          <ParagraphComponent paragraph={individualScore.content}/>
          </div>
        </div>
      </div>
      </>
    ))}

    </div>
  );
};






