import React, { useEffect } from "react";
import { getSmurfs } from "../actions/action";
import { connect } from "react-redux";
import Smurf from "./Smurf";

const SmurfList = props => {
  console.log(props);
  useEffect(() => {
    props.getSmurfs();
  }, []);
  return (
    <div className="smurfContainer">
      {props.smurfs.length !== 0 &&
        props.smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            id={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        ))}
    </div>
  );
};

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      smurfToEdit: state.smurfToEdit,
      isEditing: state.isEditing
    };
  };
  
  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(SmurfList);