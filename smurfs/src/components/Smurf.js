import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";


const Smurf = props => {

    return (

          <div className="smurf" id={props.id}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
          </div>
    );
  }
;
export default Smurf;
