import Helmet from '../components/Layout/Helmet'

import React, { useEffect } from "react";
import TestDetail from '../components/Test/TestDetail';
import { useLocation } from 'react-router-dom'


const TestPage = (props) => {
    const test = useLocation().state.stateParam;
    
    return (
        
        <Helmet title="Trang chủ">
            <TestDetail test = {test}></TestDetail>
            {/* <TestInfo></TestInfo> */}
        </Helmet>
        
    )
}

export default TestPage
