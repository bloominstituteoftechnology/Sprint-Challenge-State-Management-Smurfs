import React from 'react';
import { connect } from 'react-redux';

const Smurfs = props => {
    return (
        <div>

        </div>
    ) 
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      smurf: state.smurf,
      error: state.error
    };
  };

export default connect(
    mapStateToProps, 
   { fetchSmurfs, postSmurf }
   )(Smurfs);