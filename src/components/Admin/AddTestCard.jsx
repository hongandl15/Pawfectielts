import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
const AddTestCard = ( props ) => {
  const [skill, setSkill] = useState('');

  useEffect(() => {
    try {
        fetch('https://pawfectielts.onrender.com/skill/getskill/'+ props.skill)
        .then(response => response.json())
        .then(data => {
          setSkill(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
   }, [props.skill]);

  return (
    <>
    <Link 
        to={{
            pathname: "/addtest/"+ skill.name + '/' +props.setid,
            state: {
                test: props.test,
                setid: props.setid,
                skillid: skill.id,
            }
        }}>
        <div className='add-test-card'>
          <div className='add-test-card_img'>
            <img src="https://www.computerhope.com/jargon/p/plus.png" alt="" />
            <p>Thêm bài test {skill.name}</p>
          </div>
        </div>
    </Link>
    </>
  );
};

export default AddTestCard;


export const TestCardAdmin = ( props ) => {
  const [skill, setSkill] = useState('');

  useEffect(() => {
    try {
        fetch('http://localhost:8888/skill/getskill/'+ props.skill)
        .then(response => response.json())
        .then(data => {
          setSkill(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
   }, [props.skill]);


   const deleteTest = () => {
      try{
        fetch('http://localhost:8888/admin/delete/' + props.testid, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          }
        })
        .then(response => 
          {console.log(response);
            props.hideTestCardAdmin()
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
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
