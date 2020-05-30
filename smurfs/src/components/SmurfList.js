import React, { useContext } from "react";
import SmurfCard from "./SmurfCard";

import { SmurfContext } from "../contexts/smurfContext";

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);
  console.log();
  return (
    <div>
      {smurfs.map((smurf) => {
        console.log(smurf);
        return <SmurfCard key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfList;
