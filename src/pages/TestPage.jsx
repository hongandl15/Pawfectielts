import Helmet from '../components/Layout/Helmet'

import React from "react";
import TestDetail from '../components/Test/TestDetail';
import { useLocation } from 'react-router-dom'


const TestPage = (props) => {
    const test = useLocation().state.stateParam;
    
    return (
        
        <Helmet title="Trang chủ">
            < div className='pt-5'>
            <TestDetail test = {test}></TestDetail>
            {/* <TestInfo></TestInfo> */}
            </div>
        </Helmet>
        
    )
}

export default TestPage
