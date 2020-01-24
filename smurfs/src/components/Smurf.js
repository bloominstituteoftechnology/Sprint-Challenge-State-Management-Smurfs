import React from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions/actions";

const Smurf = props => {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>age: {props.smurf.age}</p>
            <p>height: {props.smurf.height}</p>
            <button onClick={e => props.deleteSmurf(e, props.smurf.id)}>X</button>
        </div>
    )
}

export default connect(null, { deleteSmurf })(Smurf);