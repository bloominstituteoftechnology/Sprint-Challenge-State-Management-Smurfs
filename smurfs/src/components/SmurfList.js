import React, { useEffect } from "react";
import "./App.css"; 

import { connect } from "react-redux";
import { fetchSmurf } from "../actions/Actions"

const SmurfList = props => {
    useEffect(() => {
        props.fetchSmurf();
    }, []);

    return(
        <div>
            {props.smurfs && props.smurfs.map(smurf => {
                return (
                    <div>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                )})}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps, { fetchSmurf })(SmurfList);