import React from "react";
import { connect } from "react-redux";

//create smurfList component to map trhough smurf info and pull from api and start to display

const SmurfList = (props) => {
  return (
    <div>
      {props.smurfs &&
        props.smurfs.map((smurf) => {
          return (
            <div>
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          );
        })}
    </div>
  );
};

//create mapStateToprops to map my state to props in my code
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};
export default connect(mapStateToProps, {})(SmurfList);
