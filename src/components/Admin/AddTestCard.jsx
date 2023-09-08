import React, {useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Button } from '@mui/material';
const AddTestCard = ( props ) => {
  const [skill, setSkill] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  useEffect( () =>{
    getSkill();
  },[props.skill])

  const getSkill = async () => {
        try {
          const response = await fetch('https://pawfectielts.onrender.com/skill/getskill/' + props.skill, {
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
  const history = useHistory();
   const deleteTest = async () => {
    const isSubmit = window.confirm("Bạn có chắc chắn muốn xóa test")
    if(isSubmit)
      try {
        const response = await fetch('https://pawfectielts.onrender.com/admin/delete/' + props.testid, {
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

      const navigatePage = () => {
        history.push({
          pathname: '/test',
          state: {stateParam: props.test}
        });
      }

  return (
    <>
        <div className='test-card-admin'>
            <h3>{props.test.name}</h3>
            <div className='m-5'>
                {/* <div className='delete-test'>

                </div> */}
                <Button className='m-2' variant="contained" onClick={navigatePage} >Chi tiết</Button>
                <Button variant="contained" onClick={deleteTest} color="error" >Xóa Test</Button>
            </div>
        </div>


    </>
  );
};
