import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSmurf } from "../actions";
import "./App.css";

const initialState = {
  name: "",
  age: "",
  height: "",
};

const SmurfForm = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSmurf(values));
    setValues(initialState);
  };

  const { name, age, height } = values;

  return (
    <form className="dk1" onSubmit={handleSubmit}>
      <label className="dk">
        Name:
        <input
          className="dk"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className="dk">
        Age:
        <input
          className="dk"
          type="text"
          name="age"
          onChange={handleChange}
          value={age}
        />
      </label>
      <label className="dk">
        Height:
        <input
          className="dk"
          type="text"
          name="height"
          onChange={handleChange}
          value={height}
        />
      </label>
      <button type="submit">Add smurf</button>
    </form>
  );
};

export default SmurfForm;
