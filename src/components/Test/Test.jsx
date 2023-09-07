import React, { useEffect, useState } from 'react'

export const Test = (props) => {

    const API_URL = 'http://localhost:8888/part/get/' + props.testid ;
    const [testData, setData] = useState([]);
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
            setData(data[props.passage-1].content);
            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }, [urlSet]);  // Include urlSet as a dependency to ensure useEffect is triggered when it changes

    return (
        <>
        {testData != null &&
            <div className='Topic'>  
                <div dangerouslySetInnerHTML={{ __html: testData }} />
            </div>
        }
        </>
    )
}

export default Test;

