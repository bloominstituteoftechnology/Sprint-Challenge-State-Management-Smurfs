import React from "react";

export default function SmurfCard(props) {
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={e => props.deleteSmurf(props.smurf.id)}>X</button>
    </div>
  );
}
