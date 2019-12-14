import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getSmurf, addSmurf } from "../actions";

const Smurf = props => {
  return (
    <div className="app">
      <h1>2019 Smurf Village Census</h1>
      <h2>Number of Smurfs in this village: {props.smurf.length}</h2>
      {/* {!props.Smurf && !props.isFetching && <p>fetch a smurf</p>} */}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      <button onClick={props.getSmurf}>
        CLICK HERE to see Smurf Village Census Data
      </button>
      {props.smurf.map(item => (
        <div className="dataDiv" key={item.id}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Height: {item.height}</p>
        </div>
      ))}
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

export default connect(mapStateToProps, { getSmurf, addSmurf })(Smurf);
