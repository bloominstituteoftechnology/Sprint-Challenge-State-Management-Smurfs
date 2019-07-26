import React, {useState, useContext} from 'react';
import {SmurfContext} from './contexts/smurfContext'

export const SmurfForm = () => {
  const {addSmurf} = useContext(SmurfContext)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')

  const handleNameChange = e => {
    setName( e.target.value );
  };
  const handleAgeChange = e => {
    setAge( e.target.value );
  };
  const handleHeightChange = e => {
    setHeight( e.target.value );
  };

  const submitSmurf = e => {
    e.preventDefault();
    addSmurf(e, name, age, height);
    setAge('');
    setName('')
    setHeight('')
  };
  

    return (
      <div className="SmurfFormCont">
        <h2>Build-a-Smurf</h2>
        <form onSubmit={submitSmurf}>
          <input
            onChange={handleNameChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <input
            onChange={handleAgeChange}
            placeholder="age"
            value={age}
            name="age"
          />
          <input
            onChange={handleHeightChange}
            placeholder="height"
            value={height}
            name="height"
          />
          <button>Add to the village</button>
        </form>
      </div>
    );
}