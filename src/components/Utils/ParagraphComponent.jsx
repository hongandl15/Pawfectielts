import React from 'react';
function ParagraphComponent( props) {
    if (!props.paragraph) {
        return null; // Handle case where paragraph prop is not provided
      }
    
      const lines = props.paragraph.split("\n");
      const html = lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    
      return <div>{html}</div>;
    }
  
  export default ParagraphComponent;