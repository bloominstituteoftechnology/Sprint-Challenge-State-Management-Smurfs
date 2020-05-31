import React, { useContext } from "react";
import SmurfCard from "./SmurfCard";

import { GlobalContext } from "../contexts/GlobalState";

const SmurfList = () => {
  const state = useContext(GlobalContext);
  // console.log({ state });
  return (
    <div>
      {state.loading ? (
        <h1>LOADING ...</h1>
      ) : state.smurfs.lenght < 1 ? (
        <h1>You have no smurfs</h1>
      ) : (
        state.smurfs.map((smurf) => {
          return <SmurfCard key={smurf.id} smurf={smurf} />;
        })
      )}
    </div>
  );
};

export default SmurfList;
