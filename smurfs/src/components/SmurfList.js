import React from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from "../actions/action";

import SmurfForm from "./SmurfForm";

const SmurfList = props => {
  console.log(props);

  const fetchSmurfs = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <div>
      <div>
        {props.smurf.map(smurf => (
          <p key={smurf.name}>
            {smurf.name} - Age: {smurf.age} , Height: {smurf.height}cm
          </p>
        ))}
      </div>
      <button onClick={fetchSmurfs}>Show me the Smurfs!</button>
      <SmurfForm addSmurf={props.addSmurf} />
    </div>
  );
};

const mapStateToProps = state => ({
  smurf: state.smurf,
  error: state.error
});

export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfList);
