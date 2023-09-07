import React, { useEffect, useState } from "react";
import { TestCard } from "../Test/ListTestCard";
import AddTestCard from "./AddTestCard";
import { TestCardAdmin } from "./AddTestCard";

const SetDetail = (props) => {
    const API_URL = 'https://pawfectielts.onrender.com/test/getbyset/' + props.setid;
    const [testData, setData] = useState([]);
    const [urlSet, setUrl] = useState(API_URL);
    const [showTestCardAdmin, setShowTestCardAdmin] = useState(true);

    const hideTestCardAdmin = () => {
      setShowTestCardAdmin(false);
  };
  
    useEffect(() => {
        fetch(urlSet, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // ... other headers if needed
            }
        })
        .then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }, [urlSet, showTestCardAdmin]); 
     // Include urlSet as a dependency to ensure useEffect is triggered when it changes
    const desiredSkillIds = [1, 2, 3, 4];

    return (
        <div className="list-test-card">
        {desiredSkillIds.map(desiredId => (
          testData.some(item => item.skill.id === desiredId) ? (
            testData.map(item => (
              item.skill.id === desiredId ? (
                <TestCardAdmin 
                  key={item.id}
                  test={item} 
                  testid={item.id} 
                  setid={props.setid} 
                  skill={desiredId} 
                  hideTestCardAdmin={hideTestCardAdmin} 
                  />
              ) : null
            ))
          ) : (
            <AddTestCard key={desiredId} setid={props.setid} skill={desiredId}></AddTestCard>
          )
        ))}
      </div>
    )
}
export default SetDetail