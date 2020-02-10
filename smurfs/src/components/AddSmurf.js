import React, { useState } from 'react';
import axios from "axios"
const AddSmurf = (props) => {
 const [smurf, setSmurf] = useState({name: "", age: 0, height: 0});

  const add = e => {
    e.preventDefault();
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => props.history.push('/'))
        .catch(err => console.log(err));
  }

  const handleChange = e => {
      setSmurf({
        ...smurf,
        [e.target.name]: e.target.value,
      })
  }

    return (
      <div>
        <form onSubmit={add}>
            <label>Name: </label>
          <input
            type="text"
            name="name"
            value={smurf.name}
            onChange={handleChange}
          />
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={smurf.age}
            onChange={handleChange}
          />
          <label>Height: </label>
          <input
            type="number"
            name="height"
            value={smurf.height}
            onChange={handleChange}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    )
}

export default AddSmurf;