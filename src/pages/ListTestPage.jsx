import Helmet from '../components/Layout/Helmet'

import React, { useEffect, useState } from "react";

import ListTestCard from '../components/Test/ListTestCard';

const ListTestPage = () => {
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


    return (
        <>
            <Helmet title="List bài test">
                {setList.map((item, index) => (
                    <ListTestCard setid={item.id} />
                ))}
            </Helmet>
        </>
    );  
}

export default ListTestPage
