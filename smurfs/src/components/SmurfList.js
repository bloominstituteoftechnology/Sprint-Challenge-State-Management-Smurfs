import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../states/actionCreators";

export function SmurfList({ fetchSmurfAPI, api }) {
  useEffect(() => {
    fetchSmurfAPI();
  }, []);
  return (
    <>
      {api.length
        ? api.map(api => (
            <div className="smurf" key={api.id}>
              <div className="smurf_name">Name: {api.name}</div>
              <div className="smurf_age">Age: {api.age}</div>
              <div className="smurf_height">Height: {api.height}</div>
            </div>
          ))
        : "No smurfs found"}
      {}
    </>
  );
}

export default connect(
  function mapStateToProps(state) {
    return {
      api: state.api
    };
  },
  actionCreators
)(SmurfList);