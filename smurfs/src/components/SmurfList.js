import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';

const SmurfList = (props) => {
  useEffect(() => {
    props.fetchSmurfs()
  }, []);
  if (props.isFetching) {
    return <h2>Loading Smurfs</h2>
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.Smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  )
}

mapStateToProps = (state) => {
  return {
    Smurfs: state.Smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
};

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);
