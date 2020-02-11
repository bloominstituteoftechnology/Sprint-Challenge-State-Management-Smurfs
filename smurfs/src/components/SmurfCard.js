import React from "react";
import "./App.css"; 
import { connect } from "react-redux";
import { fetchSmurf, newSmurf } from "../actions/Actions"

const SmurfCard = props => {
    return(
        <div className="SmurfCard">
            {props.smurfs.map(smurf => {
                return (
                    <h2>{smurf.name}</h2>
                    <h2>{smurf.age}</h2>
                    <h2>{smurf.height}</h2>
                )
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps, {fetchSmurf, newSmurf})(SmurfCard);