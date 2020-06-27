import React from "react";
import { connect } from "react-redux";

//create smurfList component to map trhough smurf info and pull from api and start to display

const SmurfList = (props) => {
  return (
    <div>
      {props.smurfs.map((item) => {
        return (
          <div>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
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
