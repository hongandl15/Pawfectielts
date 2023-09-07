import Helmet from '../components/Layout/Helmet'

import React, { useEffect } from "react";
import TestDetail from '../components/Test/TestDetail';
import { useLocation } from 'react-router-dom'
import TestAnswer from '../components/Test/TestAnswer';


const TestAnswerPage = (props) => {
    const testid = useLocation().state.testid;
    
    return (
        
        <Helmet title="Trang chủ">  
            <TestAnswer testid={testid}/>
        </Helmet>
        
    )
}

export default TestAnswerPage
