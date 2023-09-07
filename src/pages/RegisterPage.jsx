import Helmet from '../components/Layout/Helmet'

import React from "react";
import RegistrationForm from '../components/Authentication/RegistrationForm';
const RegisterPage = (props) => {

    return (
        
        <Helmet title="Đăng nhập">
            <RegistrationForm/>
        </Helmet>
        
    )
}

export default RegisterPage
