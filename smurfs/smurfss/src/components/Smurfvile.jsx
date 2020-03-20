import React from "react";
import "./App.css";
import { connect } from "react-redux";

const Smurfville = props => {
  return (
    <div className="smurf-container">
      {props.smurfs.map(item => {
        return (
          <div key={item.id}>
            <p>Name: {`${item.name} Smurf`}</p>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {}
)(Smurfville);