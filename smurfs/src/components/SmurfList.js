import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurfs from "./Smurfs";
import { postSmurfs } from "../actions";

const SmurfList = props => {
  console.log("list test:", props);

  //   useEffect(() => {
  //     props.postSmurfs();
  //   }, []);

  return (
    <div className="list-box">
      <h1>I am a list </h1>
      {/* <button onClick={() => props.getSmurfs()}>
        {props.isLoading ? "error" : "Get smurf Data"}
      </button> */}
      {props.isLoading
        ? "error"
        : props.data.map(item => <Smurfs data={item} key={item.name} />)}
      {/* {props.data &&
        props.data.map(item => <Smurfs key={item.name} data={item} />)} */}
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
  { postSmurfs }
)(SmurfList);
