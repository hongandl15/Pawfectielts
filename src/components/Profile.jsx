import React, { useEffect, useState } from 'react'
import ChangePasswordForm from './Layout/ChangePasswordForm';
import TestResultCard from './Utils/TestResultCard';

const Profile = (props) => {
    const [username, setUsername] = useState([]);
    const [email, setEmail] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [resultData, setResultData] = useState([]);


    const user= JSON.parse(sessionStorage.getItem('user'));
    const userid = user.id
    const API_URL = 'https://pawfectielts.onrender.com/result/getall/' + userid;
 
    useEffect(() => {
        setUsername(user.name);
        setEmail(user.email);
    }, [sessionStorage.getItem('user')]); 


    useEffect(async () => {
        await fetch(API_URL, {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json',
           }
       })
       .then(response => response.json())
       .then(data => {
        setResultData(data);
           console.log(data);
       })
       .catch(error => {
           console.error('Fetch error:', error);
       });
   }, [API_URL]); 
  // Include urlSet as a dependency to ensure useEffect is triggered when it changes
    return (
        <>
            <div className='profile'>
                <div className='profile_cover'>
                </div>

                <div className='profile_avatar'>
                    <img src="./banner-2.png" alt="" />
                </div>

                <div className='profile_name'>{username}</div>
                <div className='profile_bio'>{email}</div>
                {/* <div className='profile_bio'>The best things come from living outside of your comfort zone</div> */}
                <div>
                    <div className='change-password-btn'>
                        <button  onClick={() => setShowForm(!showForm)}>
                            {/* {showForm ? 'Hide Form' : 'Show Form'} */}
                            Đổi mật khẩu
                        </button>
                    </div>
                    {showForm && <ChangePasswordForm />}
                </div>
                <h1>Lịch sử làm bài</h1>
                {resultData.slice(0, 6).map((result, index) => (
                    <TestResultCard data = {result} order={index+1}/>
                ))}
            </div>


        </>
    )
}

export default Profile


