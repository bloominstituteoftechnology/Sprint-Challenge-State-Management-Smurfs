import React from "react";
import Smurf from "./Smurf";

export default function(props) {
  return (
    <div>
      {props.smurfs.map(smurfss => (
        <Smurf
          id={smurfss.id}
          key={smurfss.id}
          name={smurfss.name}
          age={smurfss.age}
          height={smurfss.height}
        />
      ))}
    </div>
  );
}