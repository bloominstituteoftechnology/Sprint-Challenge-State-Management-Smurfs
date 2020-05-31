import React from "react";

const Smurf = ({ age, height, id, name }) => {
  return (
    <div>{`This is ${name}, it is ${height} tall and ${age} years old`}</div>
  );
};

export default Smurf;
