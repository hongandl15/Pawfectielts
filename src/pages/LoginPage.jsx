import Helmet from '../components/Layout/Helmet'

import React from "react";
import LoginForm from '../components/Authentication/LoginForm';
const LoginPage = (props) => {

    return (
        
        <Helmet title="Đăng nhập">
            <LoginForm/>
        </Helmet>
        
    )
}

export default LoginPage
