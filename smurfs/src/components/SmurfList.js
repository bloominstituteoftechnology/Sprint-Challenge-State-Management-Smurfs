import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData, sendData } from '../actions';

import SmurfCard from './SmurfCard'

const SmurfList = props => {
  return (
    <>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get'
        )}
      </button>
      {props.smurfs &&
        props.smurfs.map(smurf => <SmurfCard key={smurf.url} SmurfList={smurf} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);
