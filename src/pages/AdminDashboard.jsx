import Helmet from '../components/Layout/Helmet'
import React, { useEffect, useState } from "react";
import ListAllSet from '../components/Admin/ListAllSet';

const AdminDashboard = () => {
    const [LoginStatusAdmin, setLoginStatusAdmin] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
        const user = JSON.parse(sessionStorage.getItem('user'))
        if(user && user.role == "ADMIN"){
            setLoginStatusAdmin(true)
        }
    //   if (loading) return;
    //   if (!user) return history.push('/');
    //   fetchUser();
    }, [sessionStorage.getItem('user')]);

    const renderContent = () => {
        if (LoginStatusAdmin) {
            return (
                <>
                    <ListAllSet></ListAllSet>
                </>
            );
        } else {
            return <h1 className='text-danger m-5'>Bạn không có quyền truy cập trang này</h1>;
        }
    };
    return (
        <Helmet title="Trang Admin">{renderContent()}</Helmet>
    )
}

export default AdminDashboard
