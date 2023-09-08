import Helmet from '../components/Layout/Helmet'

import React, { useEffect, useState } from "react";
// import TestCard from '../components/TestCard';
import Banner from '../components/Home/Banner';
import Catalogue from '../components/Catalogue';
import ListTestCard from '../components/Test/ListTestCard';

const Home = () => {
    const [LoginStatus, setLoginStatus] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
        const user = sessionStorage.getItem('user')
        if(user){
            setLoginStatus(true)
        }
    }, [sessionStorage.getItem('user')]);

    const renderContent = () => {
        if (LoginStatus) {
            return (
                <>
                    <Banner imageLink="./banner-6.png" title="Thi thử IELTS miễn phí 2023" btn_content1="Thi thử ngay" btn_content2="Tìm hiểu thêm" />
                    <Catalogue imageLink="./banner-6.png" />
                    <ListTestCard setid={1} />
                    <ListTestCard setid={2} />
                </>
            );
        } else {
            return (
            <div className='p-5'>
                <h1 className='need-login'>Bạn cần phải đăng nhập để sử dụng trang web</h1>;
            </div>
            )
        }
    };

    return <Helmet title="Trang chủ">{renderContent()}</Helmet>;
}

export default Home
