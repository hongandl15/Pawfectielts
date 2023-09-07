import Helmet from '../components/Layout/Helmet'
import React, { useEffect, useState } from "react";
import TestEditor, {TestEditorWritingOrSpeaking} from '../components/Admin/TestEditor';
import AddTest from '../components/Admin/AddTest';
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const AdminEditPageReading = (props) => {
    const setid = useLocation().state.setid;
    const skillid = useLocation().state.skillid;
    const [listTest, setListTest] = useState(['']);
    const [inputTags, setInputTags] = useState(['']);
    const [testName, setTestName] = useState('');
    const getListTest = (index, output) => {
        const updatedListTest = [...listTest];
        updatedListTest[index] = output;
        setListTest(updatedListTest);
        console.log(updatedListTest)
    };

    const handleNameChange = (onInputChange) => {
        setTestName(onInputChange);
    };

    const handleAddInput = () => {
        setInputTags([...inputTags, '']);
      };

    const handleRemoveInput = (index) => {
        const updatedInputTags = inputTags.filter((tag, i) => i !== index);
        setInputTags(updatedInputTags);
    };

    useEffect(() => {
        console.log({
            testName: testName,
            listTest: listTest,
            setid: setid,
            skillid: skillid,
        });
    }, [testName, listTest]);


    const submitDataToApi = () => {
        const isSubmit = window.confirm("Bạn có chắc chắn muốn lưu bài test")
        if(isSubmit){
            axios.post('http://localhost:8888/admin/addtest', {
                testName: testName,
                listTest: listTest,
                setid: setid,
                skillid: skillid,
            })
            .then(response => {
                // Handle success, e.g., show a success message

                console.log('API request successful', response.data);
            })
            .catch(error => {
                // Handle error, e.g., show an error message
                console.error('API request error', error);
            });
        };
    }   


    return (

        <Helmet title="Trang admin">
            <div className='admin_page'>
                <AddTest onInputChange={handleNameChange} />
                {inputTags.map((tag, index) => (
                    <div key={'section'+index} className='edit_section'>
                        <button className='remove_btn' onClick={() => handleRemoveInput(index)}>Xóa Part</button>
                        <TestEditor key={'testeditor'+index} order={index+1} output={(TestQ) =>getListTest(index, TestQ)} setid = {setid} skillid={skillid} />
                    </div>      
                ))}   
                <div className='add_input_part'><button onClick={handleAddInput}>Thêm part mới</button></div>
                <div className='save_btn'><button onClick={submitDataToApi}>Lưu bài test</button></div> 
           </div>
        </Helmet>
        
    )
}
export default AdminEditPageReading



