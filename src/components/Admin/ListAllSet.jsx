import React, { useEffect, useState } from 'react';
import AddSet from './AddSet';
import { Link } from 'react-router-dom';

const ListAllSet = (props) => {
  const API_URL = 'https://pawfectielts.onrender.com/admin/set/getall';
  const [setList, setSetList] = useState([]);
  const [urlSet, setUrl] = useState(API_URL);

  useEffect(() => {
    fetchData();
  }, [urlSet]);

  const fetchData = () => {
    fetch(urlSet, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // ... other headers if needed
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSetList(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  };

  const handleSetAdded = () => {
    // Trigger a re-fetch of the data after a new set is added
    fetchData();
  };

  return (
    <div className='pt-5'>
    <h1 className='admin-title'>Admin </h1>
    <div className='setTable'>
    <ol className="olcards">
      {setList.map((item, index) => (
            <Link
            to={{
              pathname: '/admin/set/',
              state: { stateParam: item },
            }}
            className="set-name"
          >
        <li key={index} style={{ '--cardColor': '#36aeb3' }}>
          <div className="content">
            <div className="icon">😁</div>
            {/* <div className="title">{set.id}</div> */}
            <div className="text">{item.name}</div>
          </div>
        </li>
        </Link>
      ))}
    </ol> 
    </div>
    <AddSet onSetAdded={handleSetAdded} />
    </div>
  );
};

export default ListAllSet;
