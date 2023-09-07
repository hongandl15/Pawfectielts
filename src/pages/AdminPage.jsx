import Helmet from '../components/Layout/Helmet'
import React, { useEffect, useState } from "react";
// import TestCard from '../components/TestCard';
import CKEditorComponent from '../components/Admin/CKEditorComponent';
import InputQuestion from '../components/Admin/InputQuestion';
import AddTest from '../components/Admin/AddTest';
import axios from 'axios'
import PartSelector from '../components/Admin/PartSelector';
import Test from '../components/Test/Test';
import TestEditor from '../components/Admin/TestEditor';

const AdminPage = () => {
    const [listTest, setListTest] = useState(['']);

    const getListTest = (output) => {
        const updatedListTest = [...listTest];

        updatedListTest[0] = output;

        setListTest(updatedListTest);
        console.log(listTest)
    };
    return (

        <Helmet title="Trang admin">
                <TestEditor order={1} output={getListTest}/>

                <TestEditor order={2} output={getListTest}/>

                <TestEditor order={3} output={getListTest}/>
        </Helmet>
        
    )
}

export default AdminPage

export const AdminPageReading = () => {

    return (

        <Helmet title="Trang chủ">
            <div className='admin'>
                <div className='add_topic'>
                <CKEditorComponent/>
                </div>

                <div className='add_question'>
                    <InputQuestion/>
                </div>
            </div>
        </Helmet>
        

    )
}

export const AdminPageListening = () => {

    return (

        <Helmet title="Trang chủ">
            <div className='admin'>
                <div className='add_topic'>
                <CKEditorComponent/>
                </div>
                <div className='add_question'>
                    <InputQuestion/>
                </div>
            </div>
        </Helmet>
        

    )
}

export const AdminPageWriting = () => {

    return (

        <Helmet title="Trang chủ">
            <div className='admin'>
                <div className='add_topic'>
                <CKEditorComponent/>
                </div>
                <div className='add_question'>
                    <InputQuestion/>
                </div>
            </div>
        </Helmet>
        

    )
}
