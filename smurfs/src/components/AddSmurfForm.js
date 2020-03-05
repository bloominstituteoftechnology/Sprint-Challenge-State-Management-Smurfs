import React, { useState } from 'react';
import axios from 'axios';

// const initialBlue = {
//   name: "",
//   age: "",
//   height: ""  
// };

const AddSmurfForm = () => {
  const [blue, setBlue] = useState({
    name: "",
    age: "",
    height: "" 
  })

  const handleChange = e => {
    console.log(e.target.value)
    // let value = e.target.value;

    setBlue({
      name: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", addSmurf)
      .then(res => {
        console.log(res);
        setBlue(res.data);
      })
      .catch(err => console.error(err));
      setBlue({
        name: "",
        age: "",
        height: "" 
      })
  };

  const addSmurf = e => {
    e.preventDefault();
    setBlue(blue.name, blue.age, blue.height);
  }

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