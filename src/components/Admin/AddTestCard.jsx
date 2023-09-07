import React, {useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
const AddTestCard = ( props ) => {
  const [skill, setSkill] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  useEffect( () =>{
    getSkill();
  },[props.skill])

  const getSkill = async () => {
        try {
          const response = await fetch('http://localhost:8888/skill/getskill/' + props.skill, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }else{
            const skill = await response.json()
            setSkill(skill)
          }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const navigatePage =() =>{
        history.push({
          pathname: "/addtest/"+ skill.name + '/' +props.setid,
          state: {
              test: props.test,
              setid: props.setid,
              skillid: skill.id,
          }
        });
  }

  return (
    <>
        <div className='add-test-card'>
          <div className='add-test-card_img' onClick={navigatePage}>
            <img src="https://www.computerhope.com/jargon/p/plus.png" alt="" />
            <p>Thêm bài test {skill.name}</p>
          </div>
        </div>
    </>
  );
};

export default AddTestCard;


export const TestCardAdmin = ( props ) => {


   const deleteTest = async () => {
    try {
      const response = await fetch('http://localhost:8888/admin/delete/' + props.testid, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }else{
        props.hideTestCardAdmin()
      }
      } catch (error) {
        console.error('Error:', error);
      }
    }


  return (
    <>
        <div className='test-card-admin'>
            <h3>{props.test.name}</h3>
            <div className='m-5'>
              <button onClick={deleteTest}>
                <div className='delete-test'>
                  <img src="https://icon-library.com/images/small-trash-can-icon/small-trash-can-icon-19.jpg" alt="" />
                  <h4>Xóa test</h4>
                </div>
              </button>
            </div>
        </div>


    </>
  );
};
