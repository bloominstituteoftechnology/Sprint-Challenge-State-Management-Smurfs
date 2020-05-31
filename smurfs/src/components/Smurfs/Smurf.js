import React from "react";
import axios from "axios";
import "./Smurf.css";

// Actions
import { DELETE_SMURF, DELETE_SMURF_SUCCESS } from "../../actions";

const Smurf = ({ age, height, id, name, dispatch }) => {
  const handleClick = (e) => {
    dispatch({ type: DELETE_SMURF });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) =>
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="smurf">
      <p>{`This is ${name}, it is ${height} tall and ${age} years old`}</p>
      <span className="close" onClick={handleClick}>
        {" "}
        x{" "}
      </span>
    </div>
  );
};

export default Smurf;
