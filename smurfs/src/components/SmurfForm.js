import React, { useState, useContext } from "react";
import { SmurfContext } from "../contexts/smurfContext";

const SmurfForm = () => {
  const { addNewSmurf } = useContext(SmurfContext);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChange = (e) => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={newSmurf.name}
          />
        </label>

        <label>
          Height:
          <input
            type="number"
            id="height"
            name="height"
            value={newSmurf.height}
            onChange={handleChange}
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            id="age"
            name="age"
            value={newSmurf.age}
            onChange={handleChange}
          />
        </label>

        <button>Add New Smurf</button>
      </form>
    </div>
  );
};
export default SmurfForm;
