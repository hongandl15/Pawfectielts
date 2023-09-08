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

  const deleteSet = async (setid) => {
    const isSubmit = window.confirm("Bạn có chắc chắn muốn xóa Set bài này")
    if(isSubmit)
        try {
          const response = await fetch('https://pawfectielts.onrender.com/admin/deleteset/' + setid, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          } else {
            fetchData();
          }
        } catch (error) {
          console.error('Error:', error);
        }
  }

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

            <li key={index} style={{ '--cardColor': '#36aeb3' }}>
              <div className="content">
                <Link
                  to={{
                    pathname: '/admin/set/',
                    state: { stateParam: item },
                  }}
                  className="set-name"
                >
                  <div className="icon">😁</div>
                  {/* <div className="title">{set.id}</div> */}
                  <div className="text">{item.name}</div>
                </Link>
                <div className='delete-set' onClick={() => deleteSet(item.id)}><i className="fa fa-trash" aria-hidden="true"></i></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <AddSet onSetAdded={handleSetAdded} />
    </div>
  );
};

export default ListAllSet;
