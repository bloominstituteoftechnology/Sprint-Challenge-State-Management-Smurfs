
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/index';



const Smurf = ({ getSmurf, name }) => {


    useEffect (() =>{
        getSmurf ();
    },[getSmurf]);

    return (
        <div>
            <h1> Smurf : {name} </h1>
            <button onClick={getSmurf}>See another Smurf</button>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        name: state.name,
        isFetching: state.isFetching,
        error: state.error
    };
};


export default connect(mapStateToProps, { getSmurf })(Smurf);