import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value,setvalue] = useState(0)
  useEffect(() => {
    if (value>=1){
      document.title = `New Message ${value}`;
    }
    
  }, [value])

  //if we use [] as second parameter it will run at once
  //then 13 line will be }, [])
  //we can have as many use effect as we want
  
  return (
    <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>{setvalue(value+1)}}>
      click me
    </button>
    </>
  )
};

export default UseEffectBasics;
