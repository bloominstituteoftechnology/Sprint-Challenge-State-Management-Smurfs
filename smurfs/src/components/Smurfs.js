import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, removeSmurf } from "../actions";
import Smurf from "./Smurf";
import "./App.css";
​
const Smurfs = (props) => {
  console.log(props);
  useEffect(() => {
    console.log("fetching");
    props.fetchSmurfs();
  }, []);
​
  if (props.updated) {
    props.fetchSmurfs();
  }
​
  const handleDelete = (id) => {
    console.log(id);
    props.removeSmurf(id);
  };
​
  return (
    <>
      {props.smurfs.map((smurf) => (
        <Smurf id={smurf.id} {...smurf} handleDelete={handleDelete} />
      ))}
    </>
  );
};
​
const mapStateToProps = (state) => {
  console.log("mapStatoToProps state");
  console.log(state);
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
    updated: state.updated,
  };
};
​
export default connect(mapStateToProps, { fetchSmurfs, removeSmurf })(Smurfs);