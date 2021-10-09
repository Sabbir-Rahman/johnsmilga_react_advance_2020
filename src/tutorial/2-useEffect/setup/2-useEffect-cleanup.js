import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize',checkSize)

    //return will invoke once when we exit
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <>
      <h2>Window</h2>
      <h2>{size} PX</h2>
    </>
  )
};

export default UseEffectCleanup;
