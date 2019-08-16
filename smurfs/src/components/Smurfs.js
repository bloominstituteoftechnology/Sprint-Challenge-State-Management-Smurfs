import React from "react";

const Smurfs = props => {
  console.log("Smurfs test:", props);
  return (
    <div>
      <h1>Name: {props.data.name}</h1>
      <h1>Age: {props.data.age}</h1>
      <p>Height: {props.data.height}</p>
    </div>
  );
};

export default Smurfs;
