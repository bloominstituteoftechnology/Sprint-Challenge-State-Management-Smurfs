import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurfs from "./Smurfs";
import { getSmurfs } from "../actions";

const SmurfList = props => {
  console.log("list test:", props);

  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div className="list-box">
      <h1>I am a list </h1>
      {/* <button onClick={() => props.getSmurfs()}>
        {props.isLoading ? "error" : "Get smurf Data"}
      </button> */}
      {props.isLoading
        ? "error"
        : props.data.map(item => {
            return <Smurfs item={item} key={item.name} />;
          })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
