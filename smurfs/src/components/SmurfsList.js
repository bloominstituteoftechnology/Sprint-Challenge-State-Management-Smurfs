import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { fetchSmurfs } from '../actions/actions.js';
import { connect } from 'react-redux';

const SmurfsList = props => {
    
    useEffect(() => {
        props.fetchSmurfs();
    }, [])
    
    console.log(props.smurfs);
    return (
        <div>
            {props.smurfs.map(smurf => {
                return <Smurf smurf={smurf} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);