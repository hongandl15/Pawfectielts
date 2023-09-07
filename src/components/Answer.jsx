import React, { useEffect, useState } from 'react'
import ButtonShow from './ButtonShow'
import { Button } from '@mui/material'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useHistory } from 'react-router-dom'
import { CountdownTimer } from './Test/TestSubmit';
import AlertScore from './Utils/AlertScore';

const Answer = (props) => {

  const API_URL = 'https://pawfectielts.onrender.com/question/get/' + props.partid;
  const [testData, setData] = useState([]);
  const [urlSet, setUrl] = useState(API_URL);
  const [answers, setAnswers] = useState(Array(40).fill(''));

  useEffect(() => {
    fetch(urlSet)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, [urlSet]);  // Include urlSet as a dependency to ensure useEffect is triggered when it changes

  // Load saved input from session when component mounts
  useEffect(() => {
    const savedAnswers = JSON.parse(sessionStorage.getItem('ieltsAnswers'));
    if (savedAnswers) {
      setAnswers(savedAnswers);
    }
  }, []);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
    const updatedAnswersObject = { answer: updatedAnswers };
    sessionStorage.setItem('ieltsAnswers', JSON.stringify(updatedAnswers));
    sessionStorage.setItem('ieltsAnswersSubmit', JSON.stringify(updatedAnswersObject));
  };


  return (
    <>
    <div className='Answer'>
      {testData.map(item => (
        <div key={`html-${item.id}`}>
          <div dangerouslySetInnerHTML={{ __html: item.title }} />
          {item.questionDetails.map(itemc => (
            <div key={itemc.id}>
              <div className='question_number'>{itemc.order}</div> {itemc.name}
              {itemc.child.length === 0 ? (
                <div key={`input-${itemc.id}`}>
                  <input type="text"
                    value={answers[itemc.order - 1]}
                    onChange={(e) => handleAnswerChange(itemc.order - 1, e.target.value)} />
                </div>
              ) : (
                <div className=''>
                  {itemc.child.map(itemcc => (
                    <div key={`radio-${itemcc.id}`}>
                      <input type="radio" value={itemcc.content} name='answerChild' />
                      <label>{itemcc.content}</label>
                    </div>
                  ))}
                </div>
              )
              }
            </div>
          ))}
        </div>
      ))}

    </div>
    </>
  )
}


export const AnswerWriting = (props) => {

  const HTMLToString = ( html ) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText;;
  };

  const [answers, setAnswers] = useState(Array(2).fill(''));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [listpart, setListPart] = useState(props.listpart.map(item => HTMLToString(item.content).replace(/\n/g, ' ')));
  const history = useHistory();

  useEffect(() => {
    const savedAnswers = JSON.parse(sessionStorage.getItem('ieltsAnswersWriting'));
    if (savedAnswers) {
      setAnswers(savedAnswers);
    }
  }, []);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
    sessionStorage.setItem('ieltsAnswersWriting', JSON.stringify(updatedAnswers));
  }


  console.log(HTMLToString(props.partcontent))

  const userId = JSON.parse(sessionStorage.getItem('user')).id
  const handleConfirmSubmit = async () => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn nộp bài?");
  
    if (isConfirmed) {
      setIsSubmitting(true);
      setShowComponent(true); // show the component
      const savedAnswers = JSON.parse(sessionStorage.getItem('ieltsAnswersWriting'))
      const submitContent = JSON.stringify({ answer: savedAnswers, topic: listpart })
      try {

        const response = await fetch('https://pawfectielts.onrender.com/result/getpassagescore/'+ props.testid +'?userId='+ userId, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: submitContent,
        });

        const data = await response.json();
        const testResultId = data.id;


        history.push({
          pathname: "/exam/resultpassage/" + testResultId,
          state: {
            id: props.testid,
            testResultId: testResultId
          }
        });
  
        console.log(testResultId); // Output the testResultId for debugging
  
        sessionStorage.removeItem('ieltsAnswersWriting');
        sessionStorage.removeItem('ieltsAnswersWritingSubmit');
  
      } catch (error) {
        console.error('Error:', error);
      }
    }


  };
  

  return (
    <>
        {showComponent && (
        <AlertScore message={"Hệ thống đang chấm điểm, bạn vui lòng đợi chốc lát..."} />
        )}
      <div className='Answer_writing' id='Answer_writing'>
        {/* ...your form content... */}
        <ButtonShow></ButtonShow>
        <textarea name="writing"
        value={answers[props.partorder-1]} 
        onChange={(e) => handleAnswerChange(props.partorder-1, e.target.value)} placeholder='Viết essay tại đây'></textarea>
      </div>
      {/* ...your other components and content... */}
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

    </>
  );
}



export const AnswerSpeaking = (props) => {
  const HTMLToString = ( html ) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText;;
  };
  
  const [answers, setAnswers] = useState(["", "", ""]);
  const [listpart, setListPart] = useState(props.listpart.map(item => HTMLToString(item.content).replace(/\n/g, ' ')));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const history = useHistory();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  // 



  useEffect(() => {
    const savedAnswers = JSON.parse(sessionStorage.getItem('ieltsTranscripts'));
    if (savedAnswers) {
      setAnswers(savedAnswers);
    }
  }, []);

  useEffect(() => {
    handleTranscriptChange(props.partorder-1, transcript);
    console.log(listpart)
  }, [transcript, props.partorder, listpart]);


  const deleteTranscript = (index) => {
    const currentTranscript = JSON.parse(sessionStorage.getItem('ieltsTranscripts'));
    currentTranscript[index] = '';
    sessionStorage.setItem('ieltsTranscripts', JSON.stringify(currentTranscript));
    setAnswers(currentTranscript)
}

  const handleTranscriptChange = (index, value) => {
    if (!sessionStorage.getItem('ieltsTranscripts')){
      sessionStorage.setItem('ieltsTranscripts', JSON.stringify(['','','']));
    }
    const savedTranscripts = JSON.parse(sessionStorage.getItem('ieltsTranscripts')) || ["", "", ""];
    if (value){
      savedTranscripts[index] = value;
      sessionStorage.setItem('ieltsTranscripts', JSON.stringify(savedTranscripts));
      setAnswers(savedTranscripts)
    }
  };



  const userId = JSON.parse(sessionStorage.getItem('user')).id

  const handleConfirmSubmit = async () => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn nộp bài?");
    if (isConfirmed) {
      setIsSubmitting(true);
      setShowComponent(true); // show the component
      const savedTranscripts = JSON.parse(sessionStorage.getItem('ieltsTranscripts'))
      const submitContent = JSON.stringify({ answer: savedTranscripts, topic: listpart })
      const response = await fetch('https://pawfectielts.onrender.com/result/getpassagescore/'+ props.testid +'?userId='+ userId, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: submitContent,
        });

        if (!response.ok) {
          window.alert("Có lỗi xảy ra, vui lòng thử lại sau 1 phút")
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const testResultId = data.id;

        console.log(testResultId); // Output the testResultId for debugging
        sessionStorage.removeItem('ieltsTranscripts');

        history.push({
          pathname: "/exam/resultpassage/" + testResultId,
          state: {
            id: props.testid,
            testResultId: testResultId
          }
        });
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }



  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  };

  return (
    <>
      {showComponent && (
      <AlertScore message={"Hệ thống đang chấm điểm, bạn vui lòng đợi chốc lát..."} />
      )}
    <div className='Answer_writing'>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <p className='text-danger'>Lưu ý: Không chuyển part khi text chưa hiện hết</p>
      <Button variant="contained" color="success" onClick={listenContinuously}>Start</Button>
      <Button variant="contained" color="error" onClick={SpeechRecognition.stopListening}>Stop</Button>
      <Button variant="contained" onClick={(e) => deleteTranscript(props.partorder-1)}>Reset</Button>
      <ButtonShow></ButtonShow>
      {/* <div>{transcript}</div> */}
      <textarea      
        value={answers[props.partorder-1]} 
        onChange={(e) => handleTranscriptChange(props.partorder-1, e.target.value)}
        disabled
      ></textarea>
    </div>
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
    </>
  );
};


export default Answer


