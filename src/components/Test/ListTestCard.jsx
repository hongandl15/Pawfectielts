
import React, { useEffect, useState } from "react";
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'

const ListTestCard = (props) => {
    const API_URL = 'https://pawfectielts.onrender.com/test/getbyset/' + props.setid;
      const [testData, setData] = useState([]);
      const [urlSet, setUrl] = useState(API_URL);
      const [listTest, setListTest] = useState('')
  
      useEffect(() => {
          fetchData();
      }, []);  // Include urlSet as a dependency to ensure useEffect is triggered when it changes
      const fetchData = async () => {
          try {
            const response = await fetch(urlSet); // Replace with your API endpoint
            const jsonData = await response.json();
            setData(jsonData);
            if (jsonData.length > 0) {
              setListTest(jsonData[0].set.name);
              console.log(listTest);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
  
    return (
      <div className='todolist'>
        <h1>{listTest}</h1>
        <ol>
          {testData.map((card, index) => (
            <TestCard key={card.id} card={card} ></TestCard>
          ))}
        </ol>
      </div>
    );
  };
export default ListTestCard


export const TestCard = (props) => {
    const testcardclass = 'TestCard' + ' test-'+ props.card.skill.name
    return (
        <Link 
            to={{
                pathname: "/test",
                state: {stateParam: props.card}
            }}
        className="LinkWithoutUnderline">
        {/* <div className='TestCard test-reading'>   */}
        <li className={testcardclass}>
            {/* style={{ '--accent-color': "#0D6EFD" }}> */}
            <div className="icon"><i className={"fa-brands fa-codepen"}></i></div>
            <div className="title">Kỹ năng {props.card.skill.name}</div>
            <div className="descr">
                Bài test {props.card.name}
                <div>Làm ngay</div>         
            </div>
        </li>
        </Link> 
    )
}


