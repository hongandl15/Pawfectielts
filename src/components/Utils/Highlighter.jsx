import React, { useRef } from 'react';
import Mark from 'mark.js';

const Highlighter = ({ passage }) => {
  const passageRef = useRef(null);
  let markInstance;

  const handleMouseDown = (event) => {
    // Create a new instance of Mark.js when the mouse is pressed down
    markInstance = new Mark(passageRef.current);
  };

  const handleMouseUp = () => {
    // Get the selected text
    const selection = window.getSelection();
    const selectedText = selection.toString()

    // Highlight the selected text using Mark.js
    if (selectedText !== '') {
      // markInstance.unmark();
      markInstance.mark("you can", { className: 'highlight' });
    }
  };

  return (
    <div>
      <div>
        <p
          ref={passageRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {passage}
        </p>
      </div>
    </div>
  );
};

export default Highlighter;