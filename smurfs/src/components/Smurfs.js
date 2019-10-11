import React from "react";

const Smurfs = props => {
  console.log("Smurfs test:", props);
  return (
    <div className="smurf-card">
      <h1>I am a Smurf</h1>
      <h1>Name: {props.data.name}</h1>
      <h1>Age: {props.data.age}</h1>
      <h1>Height: {props.data.height}</h1>
    </div>
  );
};

export default Smurfs;
