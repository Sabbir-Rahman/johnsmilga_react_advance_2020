import React, { useState } from 'react';

//some hooks rule
//hooks start with use
//hooks component name must be uppercase
//hooks must be in the function/componnet body
//hooks cannot call conditionally

const UseStateBasics = () => {
  const [text, setText] = useState('random title')

  const handleClick = () => {
    if (text === 'random title'){
      setText('Hello World')
    } else {
      setText("random title");
    }
    
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
