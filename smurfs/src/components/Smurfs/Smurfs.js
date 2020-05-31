import React, { useContext } from "react";
import "./Smurfs.css";

// Components
import Smurf from "./Smurf";

// Contexts
import { SmurfContext } from "../../contexts/SmurfContext";

const Smurfs = () => {
  const { smurfs, dispatch } = useContext(SmurfContext);

  return (
    <section className="smurfs">
      {smurfs.map((smurf) => {
        return <Smurf key={smurf.id} dispatch={dispatch} {...smurf} />;
      })}
    </section>
  );
};

export default Smurfs;
