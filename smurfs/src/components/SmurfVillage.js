import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions/actions";
import { addSmurf } from "../actions/actions";

const SmurfVillage = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);
  if (props.fetchingSmurfs) {
    return <h2>Loading Smurf Village...</h2>;
  }
  return (
    <div>
      {props.state && <p>{props.error}</p>}
      {props.smurfs.map(smurf => (
        <div>
          <h1>Name: {smurf.name}</h1>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("current state", state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(SmurfVillage);
