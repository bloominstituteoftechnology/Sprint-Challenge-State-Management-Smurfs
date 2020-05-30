import React from "react";

const SmurfCard = (props) => {
  console.log("LT: SmurfCard.js: props", props);
  return (
    <div className="smurfCard">
      <h1>{props.smurf.name}</h1>
      <p>Age: {props.smurf.age} years</p>
      <p>Height: {props.smurf.height}</p>
      <button>Edit Smurf</button>
    </div>
  );
};

export default SmurfCard;
