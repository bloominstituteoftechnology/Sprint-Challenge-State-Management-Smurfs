import React from "react";
import { connect } from "react-redux";

const Smurf = props => {
  return (
    <div className="app">
      <h1>This is my Smurfs component</h1>
      {!props.Smurf && <p>fetch a smurf</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isAdding: state.isAdding,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(Smurf);
