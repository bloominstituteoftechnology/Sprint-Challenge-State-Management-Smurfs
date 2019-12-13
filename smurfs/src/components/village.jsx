import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVillage, removeSmurf } from "../actions/";

const Village = () => {
  const store = useSelector(state => state.asyncReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVillage());
  }, []);

  return (
    <div>
      <h1>This village contains:</h1>
      {store.smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <p>{smurf.name}</p>
            <p>{smurf.height}</p>
            <p>{smurf.age}</p>
            <p>{smurf.id}</p>
            <button onClick={() => dispatch(removeSmurf(smurf.id))}>X</button>
          </div>
        );
      })}
      {/* <button onClick={() => dispatch(getVillage())}>Pull Smurfs</button> */}
    </div>
  );
};

export default Village;