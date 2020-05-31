import React, { useContext } from "react";

// Components
import Smurf from "./Smurf";

// Contexts
import { SmurfContext } from "../../contexts/SmurfContext";

const Smurfs = () => {
  const { smurfs, dispatch } = useContext(SmurfContext);

  return (
    <section>
      {smurfs.map((smurf) => {
        console.log(smurf);
        return <Smurf key={smurf.id} {...smurf} />;
      })}
    </section>
  );
};

export default Smurfs;
