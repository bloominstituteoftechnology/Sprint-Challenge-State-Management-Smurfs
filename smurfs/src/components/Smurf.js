import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getSmurf } from "../actions";

const Smurf = props => {
  return (
    <div className="app">
      <h1>This is my Smurfs component</h1>
      {!props.Smurf && !props.isFetching && <p>fetch a smurf</p>}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.smurf && <ul>{props.smurf}</ul>}
      <button onClick={props.getSmurf}>Smurf Village Census</button>
      <button onClick={props.getSmurf}>Add New Smurf</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurf })(Smurf);
