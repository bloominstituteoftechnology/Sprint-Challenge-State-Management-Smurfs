import React from "react";
import { SmurfContext } from "./contexts/SmurfContext";
import { useContext } from "react";

const SmurfData = props => {
  const { addSmurfs } = useContext(SmurfContext);
  console.log(addSmurfs);
  return (
    <div>
      <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.height}</p>
      </div>
    </div>
  );
};

export default SmurfData;
