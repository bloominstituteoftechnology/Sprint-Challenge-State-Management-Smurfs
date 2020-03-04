import React, { useState } from 'react';
import axios from 'axios';

const initialBlue = {
  name: "",
  age: "",
  height: ""  
};

const AddSmurfForm = (props) => {
  const [blue, setBlue] = useState(initialBlue)

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "price") {
      value = parseInt(value, 10);
    }
  
    setBlue({        
      ...blue,
      [ev.target.name]: value
     });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs/", blue)
      .then(res => {
        console.log(res);
        props.updateBlue(res.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          New Smurf Name:
          <input 
            type="text"
            value="name"
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
            value="age"
            placeholder="Age"

          />
        </label>
      </div>
      <div>
        <label>
          Smurf Height:
          <input 
            type="text"
            value="height"
            placeholder="height"
          />
        </label>
      </div>
      <button>Add Smurf</button>
    </form>
  )
}

export default AddSmurfForm;