import React, { useState, Component, useContext } from 'react';
import axios from 'axios';

import { SmurfContexts } from '../contexts/SmurfContexts';

// const initialBlue = {
//   name: "",
//   age: "",
//   height: ""  
// };

const AddSmurfForm = () => {
  const [blue, setBlue] = useState({})

  // const addSmurf = useContext(SmurfContexts);
  // console.log(addSmurf)

  const handleChange = e => {
    // console.log(e.target.value)
    // let value = e.target.value;
    // e.preventDefault();
    setBlue({...blue, [e.target.name]: e.target.value})
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3333/smurfs", blue)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  };

  // const addSmurf = () => {
  //   e.preventDefault();
  //   setBlue();
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          New Smurf Name:
          <input 
            type="text"
            value={blue.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Smurf Age:
          <input 
            type="text"
            value={blue.age}
            placeholder="Age"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Smurf Height:
          <input 
            type="text"
            value={blue.height}
            placeholder="height"
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Add Smurf</button>
    </form>
  )
}

export default AddSmurfForm;