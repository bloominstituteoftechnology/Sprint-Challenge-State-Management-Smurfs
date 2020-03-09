import React, { useState } from "react";

export default function AddSmurf(props) {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.addSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <>
      <input
        type="text"
        name="name"
        value={newSmurf.name}
        onChange={handleChanges}
        placeholder="smurf name"
      />
      <input
        type="text"
        name="age"
        value={newSmurf.age}
        onChange={handleChanges}
        placeholder="smurf age"
      />
      <input
        type="text"
        name="height"
        value={newSmurf.height}
        onChange={handleChanges}
        placeholder="smurf height"
      />
      <button className="button" onClick={handleSubmit}>
        Add smurf
      </button>
    </>
  );
}