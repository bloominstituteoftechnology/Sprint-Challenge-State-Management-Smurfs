import React from "react";
import { connect } from "react-redux";
import {addSmurf} from '../actions'



function smurfsCard(props) {



    console.log(props)
return (
    <h>test</h>
)
}

export default connect(state => state)(smurfsCard);