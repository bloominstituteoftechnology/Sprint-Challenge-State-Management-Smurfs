import React from 'react';
import { connect } from 'react-redux';

const SmurfsList = (props) => {
    return ( 
        <div className='container'>
            <div className="smurfs-display">
                Hello There
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
        loading: state.loading
    }
}

export default connect(
    mapStateToProps, null)(SmurfsList);
