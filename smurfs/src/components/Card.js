import React from "react";

function Card(props) {
  return (
    <div className="card"><h4>smurf # {props.smurf.id}</h4>
      Name: {props.smurf.name}
      <br></br>Age: {props.smurf.age}
    </div>
  );
}
export default Card;
