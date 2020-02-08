import React from "react";
import "./App.css"; 
import { connect } from "react-redux";
import { fetchSmurf, newSmurf } from "../actions/Actions"

const SmurfCard = props => {
    return(
        <div className="SmurfCard">
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h3>{props.height}</h3>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        smurf: state.smurf
    }
};

export default connect(mapStateToProps, {fetchSmurf, newSmurf })(SmurfCard);