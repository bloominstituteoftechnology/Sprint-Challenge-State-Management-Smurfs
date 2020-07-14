import React from "react";

const Smurf = ({ name, age, height }) => {
  return (
    <div className="dk3">
      <h2 className="dk1">{name}</h2>
      <p className="dk1">Age:{age} years old</p>
      <p className="dk1">Height:{height} cms</p>
    </div>
  );
};

export default Smurf;
