import React, { useState } from 'react';
import axios from 'axios';

const initialBlue = {
  name: "",
  age: "",
  height: ""  
};

const AddSmurfForm = (props) => {
  const [blue, setBlue] = useState(initialBlue)

  const changeHandler = e => {
    console.log(e.target.value)
    let value = e.target.value;

    setBlue({
      [e.target.value]: value
    });
  };

  const addSmurf = e => {
    e.preventDefault();
    setBlue(blue.newName, blue.newAge, blue.newHeight);
  }

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
        ...initialBlue
      })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          New Smurf Name:
          <input 
            type="text"
            value={blue.newName}
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
            value={blue.newAge}
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
            value={blue.newHeight}
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