import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state,action)=>{

}

const defaultState = {
  people:[],
  isModalOpen:false,
  modalContent:'hello world'
}

const Index = () => {
  const [name,setname] = useState('')
  const [people,setpeople] = useState(data)
  const [showModal,setShowModal] = useState(false)
  const [state,dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(name){
      setShowModal(true)
      setpeople([...people,{id: new Date().getTime().toString(), name}])
      setname('')
    } else {
      setShowModal(true)
    }
  }
  return <>
  {showModal && <Modal/>}
  <form onSubmit={handleSubmit} className='form'>
    <div>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)}
      />
    </div>
    <button type='submit'>add</button>
  </form>
  {people.map((person)=>{
    return (
      <div key={person.id}>
        <h4>{person.name}</h4>
      </div>
    )
  })}
  </>;
};

export default Index;
