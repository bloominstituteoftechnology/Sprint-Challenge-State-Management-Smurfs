import React, { useState, useContext } from "react";
import axios from "axios";
import "./SmurfForm.css";

// Context
import { SmurfContext } from "../../contexts/SmurfContext";

// Actions
import {
  POST_SMURF_SUCCESS,
  POST_SMURF,
  POST_SMURF_FAILURE,
} from "../../actions";

const SmurfForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    age: 0,
    height: 1,
  });

  const { smurfs, dispatch } = useContext(SmurfContext);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]:
        e.target.name === "age"
          ? parseInt(e.target.value)
          : e.target.name === "height"
          ? `${e.target.value}cm`
          : e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: POST_SMURF });
    axios
      .post("http://localhost:3333/smurfs", formState)
      .then((res) => dispatch({ type: POST_SMURF_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: POST_SMURF_FAILURE, payload: err }));
    setFormState({
      name: "",
      age: 0,
    });
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <h2>Create a Smurf</h2>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Name"
        autoComplete="off"
      />

      <fieldset className="age">
        <label htmlFor="age">Age: {formState.age}</label>
        <input
          type="range"
          name="age"
          min={0}
          max={999}
          value={formState.age}
          onChange={handleChange}
          step={1}
        />
      </fieldset>

      <input
        type="number"
        name="height"
        min="1"
        max="10"
        onChange={handleChange}
      />

      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};

export default SmurfForm;
