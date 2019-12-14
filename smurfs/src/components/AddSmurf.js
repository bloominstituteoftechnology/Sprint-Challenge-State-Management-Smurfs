import React, { useState } from "react";
import { connect } from "react-redux";
// import axios from "axios";
// import {
//   FETCH_SMURF_START,
//   FETCH_SMURF_SUCCESS,
//   FETCH_SMURF_FAILURE
// } from "../actions";
import { addSmurf } from "../actions";

export const AddSmurf = props => {
  // console.log(props, "addprops)");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  // const [date, setDate] = useState("");
  const nameChange = event => {
    setName(event.target.value);
  };
  const ageChange = event => {
    setAge(event.target.value);
  };
  const heightChange = event => {
    setHeight(event.target.value);
  };
  // const id = setDate(date.now());

  // const addSmurf = () => dispatch => {
  //   // dispatch({ type: FETCH_SMURF_START });
  //   axios
  //     .post("http://localhost:3333/smurfs")
  //     .then(res => {
  //       console.log(res.data, "post res");
  //       dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response });
  //     });
  // };
  const onSubmit = e => {
    // console.log(name, age, height, "addsmurf");
    e.preventDefault();
    props.addSmurf({ name, age, height });
    setName("");
    setAge("");
    setHeight("");
  };
  return (
    <form>
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={nameChange} />
      <label>Age:</label>
      <input type="text" name="age" value={age} onChange={ageChange} />
      <label>Height:</label>
      <input type="text" name="height" value={height} onChange={heightChange} />
      <button
        onClick={e => {
          e.preventDefault();
          // console.log("test");
          onSubmit(e);
        }}
      >
        Add New Smurf
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { addSmurf })(AddSmurf);
