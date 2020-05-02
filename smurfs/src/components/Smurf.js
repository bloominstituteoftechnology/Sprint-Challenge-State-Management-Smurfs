import React from "react";
import { deleteSmurf, getEditSmurf } from "../actions/action";
import { connect } from "react-redux";

const Smurf = props => {
  return (
    <div className="smurfCard">
      <h3>Name:{props.name}</h3>
      <p>Age:{props.age}</p>
      <p>Height:{props.height}</p>
      <button className="delete" onClick={() => props.deleteSmurf(props.id)}>
        Delete
      </button>
      <button className="edit" onClick={() => props.getEditSmurf(props.id)}>
        Edit
      </button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf, getEditSmurf }
)(Smurf);