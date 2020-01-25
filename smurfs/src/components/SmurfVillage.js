import React from "react";
import { connect } from "react-redux";

import Smurf from "./Smurf";
import AddSmurfForm from "./AddSmurfForm";

import { getSmurfs } from "../actions/actions";

const SmurfVillage = props => {
    return (
        <div>
            {props.initialMode && <button className="get-smurfs-button" onClick={props.getSmurfs}>Get Smurfs</button>}
            <br />
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
            <br />
            {props.smurfs && <AddSmurfForm />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        initialMode: state.initialMode,
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfVillage);