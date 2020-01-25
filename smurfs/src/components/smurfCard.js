import React from "react";

const SmurfCard = props => {
  return (
    <div>
      <p>Current Smurf:</p>
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};

export default SmurfCard;