//5.
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Smurf from "./Smurf";
import { fetchSmurfs } from "../actions/index";

const Smurfs = () => {
  const smurfs = useSelector((state) => state.smurfs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, [dispatch]);

  console.log("SMURFS", smurfs);

  return (
    <div className="dk2">
      {smurfs.map((smurf) => (
        <Smurf key={smurf.id} {...smurf} />
      ))}
    </div>
  );
};

export default Smurfs;
