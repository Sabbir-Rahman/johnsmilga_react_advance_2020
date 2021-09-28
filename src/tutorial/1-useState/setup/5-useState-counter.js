import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value+1)
      //take the current value for prebious 10 click at a time will update for once but this time it will update 10 times
      setValue((prevState) => {
        return prevState + 1;
      })
    },2000)
  }
  return (
    <>
      <section style={{ margin: "4 rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      
      <section style={{ margin: "4 rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase after 2 seconds
        </button>
        
      </section>
    </>
  );
};

export default UseStateCounter;
