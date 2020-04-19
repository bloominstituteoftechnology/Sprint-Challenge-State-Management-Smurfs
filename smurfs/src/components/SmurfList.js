import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf.js';
import { fetchSmurfs, deleteSmurf } from '../actions';

const SmurfList = (props) => {
  useEffect(() => {
    props.fetchSmurfs()
  }, []);
  if (props.isFetching) {
    return <h2>Loading Smurfs...</h2>
  };

  return (
    <div>
      {props.Smurfs.map((smurf) => (
        <div>
          <Smurf smurf={smurf} />
          <button onClick={deleteSmurf}>Delete</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    Smurfs: state.Smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
};

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);
