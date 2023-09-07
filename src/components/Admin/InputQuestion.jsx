import React, { useState } from 'react';
import CKEditorComponent from './CKEditorComponent';
import AddQuestion from './AddQuestion';

const InputQuestion = ({listoutput}) => {
    const [inputTags, setInputTags] = useState(['']);
    // const [selectedOption, setSelectedOption] = useState('');
    const [listTopic, setListTopic] = useState([''])
    const [listQuestions , setListQuestions] = useState([])
    const [outputTags, setOutputTags] = useState([]);

    const handleAddInput = () => {
      // setInputTags([...inputTags, '']);
      setListQuestions([...listQuestions, '']);
      setListTopic([...listTopic, '']);
      setOutputTags([...outputTags, { order:'', title: '', questionDetails: []}]);
    };
  
    const handleRemoveInput = (index) => {
      const updatedInputTags = inputTags.filter((tag, i) => i !== index);
      setInputTags(updatedInputTags);
    };

// //select 
//     const handleSelectChange = (event) => {
//       setSelectedOption(event.target.value);
//     };
//   //

// CK editor
    const handleEditorSelectChange = (index, newEditorValue) => {
      const updatedTopicList = [...listTopic];
      updatedTopicList[index] = newEditorValue;
      setListTopic(updatedTopicList);
    
      const updatedOutputTags = outputTags.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            title: newEditorValue,
          };
        }
        return item;
      });

      setOutputTags(updatedOutputTags);
      if (listoutput) {
        listoutput(updatedOutputTags);
      }
    };

    const handleListQuestionSelectChange = (index, questionDetails) => {
      const updatedListQuestions = [...listQuestions];
      updatedListQuestions[index] = questionDetails;
      setListQuestions(updatedListQuestions);

      
      const updatedOutputTags = outputTags.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            questionDetails: questionDetails,
          };
        }
        return item;
      });

      setOutputTags(updatedOutputTags);
      if (listoutput) {
        listoutput(updatedOutputTags);
      }
    };


    return (
      <div>
        {listQuestions.map((tag, index) => (
          <div className='new_question' key={index}>
              <button className='remove_btn' onClick={() => handleRemoveInput(index)}>x</button>
            {/* <SelectComponent key={'select'+index} selectedValue={selectedOption} onSelectedChange={handleSelectChange} /> */}
            <CKEditorComponent key={'ckeditor'+ index} onHtmlChange={(questionDetails) =>handleEditorSelectChange(index, questionDetails)}  class="ckeditor"/>
            <AddQuestion key={'addquestion'+index}  listquestion={(listq) =>handleListQuestionSelectChange(index, listq)}/>
          </div>
        ))}

        <button className='add_input_question' onClick={handleAddInput}>+ Thêm section mới</button>
      </div>
    );
  };
  
  export default InputQuestion;