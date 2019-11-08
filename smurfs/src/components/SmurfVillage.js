import React, { useEffect } from "react";
import { connect } from "react-redux"; 

import { fetchSmurfs } from "../actions/actions";
import { addSmurf } from "../actions/actions";
import Smurfs from "./Smurfs"

export const SmurfVillage = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, [])
    if (props.fetchSmurfs) {
        return <h2>Loading Smurf Village...</h2>
    }
}
