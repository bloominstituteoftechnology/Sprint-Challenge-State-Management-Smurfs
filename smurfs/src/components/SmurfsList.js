import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';
import Smurf from './Smurfs';

const SmurfsList = (props) => {
    return ( 
        <div className='container'>
            <div className="header">
                <button onClick={props.getData}>
                {props.loading ? (
                    'Loading...'
                ) : (
                    'Smurf Village'
                )}
                </button>
            </div>
            <div className='smurfs-display'>
                {props.smurfs.map(smurf => {
                    return <Smurf key= {smurf.id} name={smurf.name} age={smurf.age}
                    height={smurf.height} />
                })}
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
