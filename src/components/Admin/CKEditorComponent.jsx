import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorComponent = ({editorValue, onHtmlChange, ...props }) => {
  const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    console.log(data)
    if (onHtmlChange) {
      onHtmlChange(data);
    }
  };

  return (
    <>
    <div className={props.class}>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleEditorChange}
        value = {editorValue}
      />
      
    </div>
    {/* <div>{editorData}</div> */}
    </>

  );
};

export default CKEditorComponent;
