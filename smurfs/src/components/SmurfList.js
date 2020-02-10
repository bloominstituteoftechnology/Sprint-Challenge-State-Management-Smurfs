import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions/index';

const SmurfList = (props) => {
    
    useEffect(() => {

        props.fetchSmurf();
        console.log(props.smurfs)

    },[])

    return (

        <div className = "smurf-list">

            {props.smurfs.map(smurf => {

                return <Smurf smurf = {smurf}/>
            })}

        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurf})(SmurfList);