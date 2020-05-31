import React, { useContext } from "react";
import SmurfCard from "./SmurfCard";
import SmurfForm from "./SmurfForm";

import { GlobalContext } from "../contexts/GlobalState";

const SmurfList = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div>
      {state.isFetching && "LOADING..."}
      {state.editing ? (
        <div>
          <SmurfForm />
        </div>
      ) : (
        state.smurfs.map((smurf) => {
          return <SmurfCard key={smurf.id} smurf={smurf} />;
        })
      )}
    </div>
  );
};

export default SmurfList;
