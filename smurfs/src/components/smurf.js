import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

const Smurf = ({ smurf, fetchSmurfs }) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);
  return (
    <>
      <div className="smurf-container">
        {smurf.map(smurf => {
          return (
            <div className="smurf-card">
              <h2>Name: {smurf.name}</h2> <br />
              <p>Age: {smurf.age}</p> <br />
              <p>Height: {smurf.height}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log("state MSTP", state);
  return {
    smurf: state.smurf
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurf);
