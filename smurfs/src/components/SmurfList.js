import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf, editSmurf } from "../actions/action";

import SmurfForm from "./SmurfForm";

import "./App.css";

const SmurfList = props => {
  const initSmurfs = props.getSmurfs
  useEffect (() => {
    initSmurfs()
  }, [initSmurfs])

  return (
    <div>
      <div className = "smurfs">
        {props.smurf.map(smurf => (
          <p key={smurf.id}>
            {smurf.name} - Age: {smurf.age} , Height: {smurf.height}<br></br>
            <button className="btn">Edit smurf</button> <br></br>
            <button className="btn">Delete Smurf</button>
          </p>
        ))}
      </div>
      <SmurfForm addSmurf={props.addSmurf} />

    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return ({
    smurf: state.smurf,
    error: state.error
  }
  )};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfList);