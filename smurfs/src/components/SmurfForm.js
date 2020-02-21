import React, { useState } from "react";
import "./App.css";

export default function(smurffss) {
  const RegState = {
    name: "",
    age: "",
    height: ""
  };

  const [newState, setnewState] = useState(RegState);

  function handleChange(event) {
    setnewState({
      ...newState,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    smurffss.post(newState);
    setnewState(RegState);
  }

  return (
    <form onSubmit={handleSubmit} className="form" >
      <input
        name="name"
        value={newState.name}
        onChange={handleChange}
        placeholder="Smurf name"
      />
      <input
        name="age"
        value={newState.age}
        onChange={handleChange}
        placeholder="Smurf age"
      />
      <input
        name="height"
        value={newState.height}
        onChange={handleChange}
        placeholder="Smurf height"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
