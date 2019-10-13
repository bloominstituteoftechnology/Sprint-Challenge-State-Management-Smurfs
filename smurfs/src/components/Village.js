import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchVillage } from '../actions';

import Smurf from './Smurf';

//destructure instead of using props
const Village = ({fetchVillage, smurfs, error, isFetching}) => {
  useEffect(() => {
    fetchVillage();
  }, [fetchVillage]);

  if (isFetching) {
    return <h2>Loading Smurfs...</h2>;
  }
console.log(`Village`,)
  return (
    <div>
      {/* if there is an error, return error message */}
      {error && <p>{error}</p>}
      {/* if smurfs were null, would need to do {smurfs && smurfs.length} then map */}
      {smurfs.map(smf => (
        <Smurf smf={smf} />
      ))}
    </div>
  );
};

//give all properties to handle any state
//we need state.smurf - to populate our data
//isFetching
//error
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