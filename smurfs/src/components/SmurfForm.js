import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import axios from "axios";

const SmurfForm = () => {
  const { fetchSuccess, fetchError } = useContext(GlobalContext);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    return newSmurf.name === "" || newSmurf.age === "" || newSmurf.height === ""
      ? null
      : axios
          .post("http://localhost:3333/smurfs", newSmurf)
          .then((response) => {
            fetchSuccess(response.data);
            setNewSmurf({
              name: "",
              age: "",
              height: "",
            });
          })
          .catch((error) => {
            fetchError(error);
          });
  };
  const handleChange = (e) => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
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
