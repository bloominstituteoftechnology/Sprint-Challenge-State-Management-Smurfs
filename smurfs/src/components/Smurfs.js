import React from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions/';

const Smurfs = ({smurf, isLoading, error}) => {

    return (
        <div>
          {isLoading && <p>Loading...</p>}
        </div>
    )
}



export default connect(
    null,
    {getSmurf}
)(Smurfs);