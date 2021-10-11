import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('');
  const [isError, setIsError] = useState(false)
  //for or if true return first one
  const firstValue = text || 'hello world';

  //for and if true return second one
  const secondValue = text && 'hello world';

  return (
    <>
    <h1>{text || 'john doe'}</h1>
    <button className='btn' onClick={()=> setIsError(!isError)}>Toggle Error</button>
    {isError && <h1>Error..</h1>}
    {isError ? (
      <p>There is an error</p>
    ) : (
      <div>
        <h2>There is no error</h2>
      </div>
    )}
    </>
  )
};

export default ShortCircuit;
