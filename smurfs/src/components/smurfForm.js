import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/index';

const SmurfForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    return (
        <>
            {props.isFetchingData ? (
                <div>Loading your smurf village!</div>
            ) : (
                <button onClick={handleGetData}>Show village</button>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(SmurfForm);