import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/";
import Smurf from "./Smurf";
import { AddSmurfForm } from "./AddSmurfForm";

const Smurfs = props => {
  return (
    <div>
      Smurfs:
      <button onClick={props.fetchSmurfs}>Get Smurfs</button>
      {!props.smurfs && !props.isLoading && <h2>Get smurfs!</h2>}
      {props.isLoading && <h2>Loading smurfs...</h2>}
      {props.smurfs && !props.isLoading && (
        <div>
          {props.smurfs.map((item, index) => (
            <Smurf key={index} smurf={item} />
          ))}
        </div>
      )}
      <AddSmurfForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
