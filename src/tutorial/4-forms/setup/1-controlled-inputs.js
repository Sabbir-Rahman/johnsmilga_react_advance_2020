import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // browser default behaviour will try to auto submit the form and reload that's why we need to prevent default
  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log('Hello world')
  }
  return (
  <>
  <article>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Name : </label>
        <input type="text" id='firstName' name='firstName'/>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email : </label>
        <input type="text" id='email' name='email'/>
      </div>
      <button type="submit" onClick={handleSubmit}>Add person</button>
    </form>
  </article>
  </>
  );
};

export default ControlledInputs;
