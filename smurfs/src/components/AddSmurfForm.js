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

  const changeHandler = e => {
    console.log(e.target.value)
    // let value = e.target.value;

    setBlue({
      ...blue, [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", blue)
      .then(res => {
        console.log(res);
        setBlue(res.data);
      })
      .catch(err => console.error(err));
      setBlue({
        ...blue
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
            onChange={changeHandler}
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
            onChange={changeHandler}
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
            onChange={changeHandler}
          />
        </label>
      </div>
      <button onClick={addSmurf}>Add Smurf</button>
    </form>
  )
}

export default AddSmurfForm;