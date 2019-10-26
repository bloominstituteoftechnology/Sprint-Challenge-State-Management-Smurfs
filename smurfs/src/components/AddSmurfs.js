import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SmurfContext } from "../contexts/SmurfContext";

const Style = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem auto;
  background: rgb(0, 0, 0, 0.4);
  color: white;

  input {
    padding: 0.5rem;
  }
  button {
    background: white;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
`;

export default function AddSmurfs() {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });
  const { addSmurfs } = useContext(SmurfContext);

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addSmurfs(newSmurf);
  };

  return (
    <Style onSubmit={e => handleSubmit(e)}>
      <h2>Add a smurf</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newSmurf.name}
        onChange={e => handleChange(e)}
      />
      <br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={newSmurf.age}
        onChange={e => handleChange(e)}
      />
      <br />

      <input
        type="number"
        name="height"
        placeholder="Height"
        value={newSmurf.height}
        onChange={e => handleChange(e)}
      />
      <br />
      <button>Add</button>
    </Style>
  );
}
