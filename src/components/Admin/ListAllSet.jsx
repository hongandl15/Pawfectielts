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
    <>
    <h1 className='m-auto mt-5 w-25'>Admin </h1>
    <div className='setTable'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {setList.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.id}</td>
              <td>
                <Link
                  to={{
                    pathname: '/admin/set/',
                    state: { stateParam: item },
                  }}
                  className="set-name"
                >
                  {item.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    
    <AddSet onSetAdded={handleSetAdded} />
    </>
  );
};

export default ListAllSet;
