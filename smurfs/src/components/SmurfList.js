import React, { useEffect } from "react";
import "./App.css"; 

import { connect } from "react-redux";
import { fetchSmurf, newSmurf } from "../actions/Actions"

import SmurfCard from "./SmurfCard";

const SmurfList = props => {
    const getSmurfs = props.fetchSmurf;
    useEffect(() => {
        getSmurfs()
    }, [getSmurfs]);

    return(
        <div>
            <div className="SmurfCard">
                {props.smurfs.map(smurf => {
                    return (
                        <div>
                            <p>Name: {smurf.name}</p>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </div>
                    )})}
                <SmurfCard newSmurf = {props.newSmurf}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps, {fetchSmurf, newSmurf})(SmurfList);