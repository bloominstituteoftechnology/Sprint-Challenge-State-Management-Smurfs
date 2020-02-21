import React, { useContext } from "react";
import { smurfContext } from "../context/smurfContext";

export default function SmurfList() {
  const context = useContext(smurfContext);

  return (
    <div>
      {context.map(smurf => {
        return (
          <div key={smurf.id}>
            Name : {smurf.name} <br />
            Age: {smurf.age}
            <br />
            height: {smurf.height}
          </div>
        );
      })}{" "}
    </div>
  );
}
