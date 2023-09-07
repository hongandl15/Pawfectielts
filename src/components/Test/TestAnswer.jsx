import React, { useEffect, useState } from 'react'

export const TestAnswer = (props) => {

    const API_URL = 'https://pawfectielts.onrender.com/answer/get/' + props.testid ;
    const [Answer, setAnswer] = useState([]);
    const [urlSet, setUrl] = useState(API_URL);

    useEffect(async () => {
         await fetch(urlSet, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            setAnswer(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }, [urlSet]);  // Include urlSet as a dependency to ensure useEffect is triggered when it changes

    return (
    
         <div className='container m-3'>
         <h3>Đáp án:</h3>
            <div class="result-answers-list">
                {Answer && Answer.map((item) => (
                <div class="result-answers-item" key={item.order}>
                    <span class="question-number">
                    <strong>{item.order}</strong>
                    </span>
                    <span class="text-answerkey">{item.correctAnswer}</span>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default TestAnswer;

