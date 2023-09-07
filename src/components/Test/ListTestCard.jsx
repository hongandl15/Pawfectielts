
import React, { useEffect, useState } from "react";
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'

const ListTestCard = (props) => {
    const API_URL = 'http://localhost:8888/test/getbyset/' + props.setid;
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
        <>

            <div className='list-card'>
                {/* <h1>{listTest}</h1> */}
                {testData.map(item => (
                    <TestCard key={item.id} test={item} ></TestCard>
                ))}
            </div>
        </>
    )
}
export default ListTestCard


export const TestCard = (props) => {
    const testcardclass = 'TestCard' + ' test-'+ props.test.skill.name
    return (
        <Link 
            to={{
                pathname: "/test",
                state: {stateParam: props.test}
            }}
        className="LinkWithoutUnderline">
        {/* <div className='TestCard test-reading'>   */}
        <div className={testcardclass}>  
            <h2>{props.test.name}</h2>
            <div className='TestCard_img'><img src={`./${props.test.skill.name}.png`} alt="" /></div>
            <div>Bộ đề thi: <span>{props.test.set.name}</span></div> 
            <Button variant="contained">
                Làm để thi
            </Button>
        </div>
        </Link> 
    )
}


