import React, { useState, useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

export default function AddSmurfs() {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: '',
    height: ''
  });
  const { addSmurfs } = useContext(SmurfContext);

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
      e.preventDefault()
      addSmurfs(newSmurf)
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <h2>Add a smurf.</h2>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={newSmurf.name}
          onChange={e => handleChange(e)}
        />
      </label>
      <br />
      <label>
        Age:{" "}
        <input
          type="number"
          name="age"
          value={newSmurf.age}
          onChange={e => handleChange(e)}
        />
      </label>
      <br />
      <label>
        Height:{" "}
        <input
          type="number"
          name="height"
          value={newSmurf.height}
          onChange={e => handleChange(e)}
        />
      </label><br/>
      <button>Add</button>
    </form>
  );
}
