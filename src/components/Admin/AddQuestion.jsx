import React, { useState } from 'react';

const AddQuestion = ({ listquestion }) => {
  const [inputTags, setInputTags] = useState(['']);
  const [inputTagsAnswer, setInputTagsAnswer] = useState(['']);
  const [outputTags, setOutputTags] = useState(['']);

  const handleAddInput = () => {
    setInputTags([...inputTags, '']);
    setInputTagsAnswer([...inputTagsAnswer, '']);
    setOutputTags([...outputTags, { name: '', correctAnswer: '', child: [] }]);
  };

  const handleInputChange = (index, value) => {
    const updatedInputTags = [...inputTags];
    updatedInputTags[index] = value;
    setInputTags(updatedInputTags);
  
    const updatedOutputTags = outputTags.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          name: value,
        };
      }
      return item;
    });
    
    console.log(updatedOutputTags)

    setOutputTags(updatedOutputTags);
  
    if (listquestion) {
      listquestion(updatedOutputTags);
    }
  };
  
  const handleInputAnswerChange = (index, value) => {
    const updatedInputTagsAnswer = [...inputTagsAnswer];
    updatedInputTagsAnswer[index] = value;
    setInputTagsAnswer(updatedInputTagsAnswer);
  
    const updatedOutputTags = outputTags.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          correctAnswer: value,
        };
      }
      return item;
    });
    console.log(value)
    console.log(updatedOutputTags)
  
    setOutputTags(updatedOutputTags);
  
    if (listquestion) {
      listquestion(updatedOutputTags);
    }
  };
  

  const handleRemoveInput = (index) => {
    const updatedInputTags = inputTags.filter((tag, i) => i !== index);
    setInputTags(updatedInputTags);
    const updatedInputTagsAnswer = inputTagsAnswer.filter((tag, i) => i !== index);
    setInputTagsAnswer(updatedInputTagsAnswer);
    const updatedOutputTags = [...outputTags];
    updatedOutputTags.splice(index, 1);
    setOutputTags(updatedOutputTags);
    if (listquestion) {
      listquestion(updatedOutputTags);
    }
  };

  return (
    <div>
      {inputTags.map((tag, index) => (
        <div className='new_question_input' key={index}>
          <h4>Câu hỏi</h4>
          <textarea
            type="text"
            value={inputTags[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <h4>Đáp án</h4>
          <textarea
            type="text"
            value={inputTagsAnswer[index]}
            onChange={(e) => handleInputAnswerChange(index, e.target.value)}
          />

          <button onClick={() => handleRemoveInput(index)}>Xóa</button>
        </div>
      ))}
      <button className='add_input_child' onClick={handleAddInput}>+</button>
    </div>
  );
};

export default AddQuestion;
