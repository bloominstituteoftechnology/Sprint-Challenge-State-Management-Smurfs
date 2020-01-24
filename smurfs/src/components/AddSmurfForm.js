import React, { useState } from "react";

import axios from "axios";

export const AddSmurfForm = props => {
  const [addASmurf, setAddSmurf] = useState({ name: "", age: "", height: "" });
  // const [addASmurfAge, setAddSmurfAge] = useState("");
  // const [addASmurfHeight, setAddSmurfHeight] = useState("");

  const handleChanges = e => {
    e.preventDefault();
    setAddSmurf({ ...addASmurf, [e.target.name]: e.target.value });
  };

  // const handleAgeChanges = e => {
  //   setAddSmurfAge(e.target.value);
  // };

  // const handleHeightChanges = e => {
  //   setAddSmurfHeight(e.target.value);
  // };

  const onSubmit = e => {
    e.preventDefault();
    console.log(addASmurf);
    axios
      .post("http://localhost:3333/smurfs", addASmurf)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <p>Add smurf:</p>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={addASmurf.name}
        onChange={handleChanges}
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        value={addASmurf.age}
        onChange={handleChanges}
      />
      <input
        type="text"
        placeholder="height"
        name="height"
        value={addASmurf.height}
        onChange={handleChanges}
      />
      <button onClick={onSubmit}>Add Smurf</button>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     isLoading: state.isLoading
//   };
// };
