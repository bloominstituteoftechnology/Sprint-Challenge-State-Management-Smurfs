import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

const Smurf = ({ name, age, height, id, isLoading, fetchSmurfs }) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);
  return <></>;
};

const mapStateToProps = state => {
  console.log(state);
  return {
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurf);
