
import React, { useEffect, useState } from "react";
// import TestCard from '../components/TestCard';
import CKEditorComponent from './CKEditorComponent';
import InputQuestion from './InputQuestion';
import FileInputComponent from "./FileInputComponent";
const TestEditor = ({ output, ...props }) => {
    const [listQuestions, setlistQuestions] = useState([])
    const [partContent, setPartContent] = useState({
        topic: {
            "topicId": 1,
            "name": "History and Culture"
        },
        order: props.order,
    });
    const [audioFile, setAudioFile] = useState(null);
    const [test, setTest] = useState({
        part: {},
        listQuestion: [],
        setid: 3,
        skillid: 2
    })

    const handleListQuestionSelectChange = (listoutput) => {
        setlistQuestions(listoutput);
        // console.log(listQuestions);
        setTest({
            ...test,
            listQuestion: listoutput,
        })
        saveOutput({
            ...test,
            listQuestion: listoutput,
        });
    };

    const handleFileChange = (file) => {
        const updatedPartContent = {
            ...partContent,
            audioFile: file,
        };

        setAudioFile(file)
        setPartContent(updatedPartContent);
        setTest({
            ...test,
            part: updatedPartContent,
        })
        saveOutput({
            ...test,
            part: updatedPartContent,
        });
    };

    const handleEditorSelectChange = (newEditorValue) => {
        const updatedPartContent = {
            ...partContent,
            content: newEditorValue,
        };
        setPartContent(updatedPartContent);
        setTest({
            ...test,
            part: updatedPartContent,
        })
        saveOutput({
            ...test,
            part: updatedPartContent,
        });
    };

    const saveOutput = (newTest) => {
        if (output) {
            output(newTest);
        }
    }

    return (

        <>
            {/* <PartSelector onSelect={handlePartOrderSChange}/> */}
            <h1>Part {props.order}</h1>
            <div className='admin'>
                <div className='add_topic'>
                    <CKEditorComponent editorValue={test.content} onHtmlChange={handleEditorSelectChange}  class="ck_passage"/>
                    {props.skillid == 1 &&
                        <FileInputComponent onChange={handleFileChange}/>
                    }
                </div>

                    {(props.skillid == 1 || props.skillid == 2) &&
                        <div className='add_question'>
                            <InputQuestion listoutput={handleListQuestionSelectChange} />
                        </div>
                    }

            </div>
        </>
    )

}
export default TestEditor


