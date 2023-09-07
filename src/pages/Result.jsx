import Helmet from '../components/Layout/Helmet'
import React from "react";
// import TestDetail from '../components/TestDetail';
import TestResult,{TestResultPassage} from '../components/Test/TestResult';
import { useLocation } from 'react-router-dom'

const Result = (props) => {
    const testResultId = useLocation().state.testResultId;
    console.log(testResultId)
    return (
        <Helmet title="Kết quả">
            <TestResult testResultId ={testResultId}/>
            <TestResultPassage testResultId ={testResultId}/>
        </Helmet>
        
    )
}
export default Result

export const ResultPassage = (props) => {
    const testResultId = useLocation().state.testResultId;
    return (
        <Helmet title="Kết quả">
            <TestResultPassage testResultId ={testResultId}/>
        </Helmet>
        
    )
}





