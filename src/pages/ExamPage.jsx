import Helmet from '../components/Layout/Helmet'
import React from "react";
// import Highlighter from '../components/Highlighter';
import TestSubmit from '../components/Test/TestSubmit';
import AudioPlayer from '../components/Test/AudioPlayer';
import ChooseSection, { ChooseSectionListening, ChooseSectionSpeaking, ChooseSectionWriting } from '../components/Utils/ChooseSection';
import { useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const ExamPageReading = (props) => {
  
  const testid = useLocation().state.id;
  const testname = useLocation().state.testname
  const testskill = useLocation().state.testskill
  
    return (
        <Helmet title="Trang chủ">
                <div className='ExamPage'>
                    <ChooseSection testid = {testid} testname={testname} testskill ={testskill}></ChooseSection>
                    <TestSubmit testid = {testid} ></TestSubmit>
                </div>
        </Helmet>
    );
  };

export const ExamPageListening = () => {

    const testid = useLocation().state.id;
    const testname = useLocation().state.testname
    const testskill = useLocation().state.testskill
  return (
      <Helmet title="Trang chủ">
<               div className='ExamPage'>
                  <AudioPlayer></AudioPlayer>
                  <ChooseSection testid = {testid} testname={testname} testskill ={testskill}></ChooseSection>
                  <TestSubmit testid = {testid} ></TestSubmit>
              </div>
      </Helmet>
  );
};




export const ExamPageWriting = () => {
  const testid = useLocation().state.id;
  const testname = useLocation().state.testname
  const testskill = useLocation().state.testskill
  return (
      <Helmet title="Trang chủ">
      <div className='ExamPage'>
          <ChooseSection key={'test'+testid} testid = {testid} testname={testname} testskill ={testskill}></ChooseSection>
      </div>
      </Helmet>
  );
};



export const ExamPageSpeaking = () => {
  const testid = useLocation().state.id;
  const testname = useLocation().state.testname
  const testskill = useLocation().state.testskill
  return (
      <Helmet title="Trang chủ">
            <div className='ExamPage'>
                <ChooseSection testid = {testid} testname={testname} testskill ={testskill}></ChooseSection>
            </div>
      </Helmet>
  );
};


export default ExamPageReading