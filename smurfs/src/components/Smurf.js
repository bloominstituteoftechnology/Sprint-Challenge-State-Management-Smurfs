import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";
import Test from "./Test";

const Smurf = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  console.log(props.smurfs);
  return (
    <div>
      {props.smurfs.map(smurf => (
        <div key={smurf.id}>
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(Smurf);
