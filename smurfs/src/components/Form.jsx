import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";


const Form = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Math.random()
  });

  const changeHandler = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitForm}>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={newSmurf.name}
        onChange={changeHandler}
      />
      <label>Age: </label>
      <input
        type="text"
        name="age"
        value={newSmurf.age}
        onChange={changeHandler}
      />
      <label>height: </label>
      <input
        type="text"
        name="height"
        value={newSmurf.height}
        onChange={changeHandler}
      />
      <button type ="submit" onClick ={() => props.postSmurf(newSmurf)}>
      Add Your Smurf!
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
  { postSmurf }
)(Form);

