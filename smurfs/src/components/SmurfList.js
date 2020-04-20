import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Smurf from './Smurf';
import {addSmurf} from '../actions/actions';

const SmurfList = (props) => {
    return (
        <div>
            {props.smurfs.map((smurf) => {
                return <Smurf key={smurf.id} smurf={smurf}/>
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps,{addSmurf})(SmurfList);
