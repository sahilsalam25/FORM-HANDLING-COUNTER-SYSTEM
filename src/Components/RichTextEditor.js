// import React, { useState } from 'react';
// import { Editor, EditorState, RichUtils } from 'draft-js';
// // import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// const RichTextEditor = () => {
//   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

//   const handleEditorChange = (newEditorState) => {
//     setEditorState(newEditorState);
//   };

//   const handleKeyCommand = (command) => {
//     const newState = RichUtils.handleKeyCommand(editorState, command);
//     if (newState) {
//       handleEditorChange(newState);
//       return 'handled';
//     }
//     return 'not-handled';
//   };

//   const onBoldClick = () => {
//     handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
//   };

//   const onItalicClick = () => {
//     handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
//   };

//   const onUnderlineClick = () => {
//     handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
//   };

//   const onListClick = () => {
//     handleEditorChange(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onBoldClick}>Bold</button>
//         <button onClick={onItalicClick}>Italic</button>
//         <button onClick={onUnderlineClick}>Underline</button>
//         <button onClick={onListClick}>List</button>
//       </div>
//       <Editor editorState={editorState} onChange={handleEditorChange} handleKeyCommand={handleKeyCommand} />
//     </div>
//   );
// };

// export default RichTextEditor;

// import React, { useState, useEffect } from 'react';

// function RichTextEditor() {
//   const [content, setContent] = useState('');

//   // Load content from local storage on component mount
//   useEffect(() => {
//     const savedContent = localStorage.getItem('editorContent');
//     if (savedContent) {
//       setContent(savedContent);
//     }
//   }, []);

//   // Save content to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('editorContent', content);
//   }, [content]);

//   const handleChange = (e) => {
//     setContent(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Rich Text Editor</h1>
//       <div className="editor">
//         <textarea
//           value={content}
//           onChange={handleChange}
//           style={{ width: '100%', minHeight: '200px' }}
//         />
//       </div>
//       <button onClick={() => setContent('')}>Clear</button>
//     </div>
//   );
// }

// export default RichTextEditor;

//000000000000000000000
import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedData = localStorage.getItem('richTextEditorData');
    if (savedData) {
      return EditorState.createWithContent(convertFromRaw(JSON.parse(savedData)));
    } else {
      return EditorState.createEmpty();
    }
  });

  useEffect(() => {
    const saveData = () => {
      const contentState = editorState.getCurrentContent();
      const rawContentState = convertToRaw(contentState);
      localStorage.setItem('richTextEditorData', JSON.stringify(rawContentState));
    };

    saveData();
  }, [editorState]);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onStyleClick = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <div>
      <div>
        <button onClick={() => onStyleClick('BOLD')}>Bold</button>
        <button onClick={() => onStyleClick('ITALIC')}>Italic</button>
        <button onClick={() => onStyleClick('UNDERLINE')}>Underline</button>
        <button onClick={() => toggleBlockType('unordered-list-item')}>Bulleted List</button>
        <button onClick={() => toggleBlockType('ordered-list-item')}>Numbered List</button>
      </div>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </div>
  );
};

export default RichTextEditor;
