import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchVillage } from '../actions';

import Smurf from './Smurf';

const Village = props => {
  useEffect(() => {
    props.fetchVillage();
  }, []);

  if (props.isFetching) {
    return <h2>Loading Smurfs...</h2>;
  }
console.log(`Village`, props)
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(smf => (
        <Smurf key={smf._id} smf={smf} />
      ))}
    </div>
  );
};

//give all properties to handle any state
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchVillage }
)(Village);