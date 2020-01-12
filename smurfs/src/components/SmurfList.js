import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/actions';

const Smurflist = (props) => {

    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    return (
        <div className='smurflist'>
            {props.smurfs.map(smurf => {
                return <Smurf smurf={smurf}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(Smurflist)