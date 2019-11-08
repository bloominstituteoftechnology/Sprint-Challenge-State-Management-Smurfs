import React, { useState } from "react";
import { connect } from "react-dom";
import { addSmurf } from "../actions/actions";

const SmurfForm = props => {
  const [smurfName, setSmurfName] = useState();
  const [smurfAge, setSmurfAge] = useState();
  const [smurfHeight, setSmurfHeight] = useState();

  const handelSubmit = e => {
    e.preventDefault();
    console.log(smurfName, smurfAge, smurfHeight);
    props.addSmurf(smurfName, smurfAge, smurfHeight);
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Name of Smurf"
          onChange={event => setSmurfName(event.target.value)}
          value={smurfName}
        />
      </form>
    </div>
  )
}
