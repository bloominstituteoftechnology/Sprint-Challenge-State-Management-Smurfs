import React, { useContext } from "react";
import  smurfContext  from "../context/smurfContext";

const SmurfCard = () => {
  const smurf = useContext(smurfContext);
  console.log(smurf)
  return (
    <div>
      {smurf.map(item => {
        <div>
          <p>{item.name}</p>
          <p>{item.age}</p>
          <p>{item.height}</p>
        </div>
      })}
    </div>
  );
};

export default SmurfCard;
