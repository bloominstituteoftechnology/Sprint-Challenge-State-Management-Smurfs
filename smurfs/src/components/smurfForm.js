import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { postSmurf } from "../actions";

function SmurfForm({ postSmurf }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState("");

  const handleName = e => {
    setName(e.target.value);
  };
  const handleAge = e => {
    setAge(e.target.value);
  };
  const handleHeight = e => {
    setHeight(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const smurf = {
      name: name,
      age: age,
      height: height
    };
    postSmurf(smurf);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleName}
          value={name}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleAge}
          value={age}
        />
        <input
          name="height"
          placeholder="Height in cm..."
          onChange={handleHeight}
          value={height}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default connect(
  null,
  { postSmurf }
)(SmurfForm);
