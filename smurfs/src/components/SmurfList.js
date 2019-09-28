import React, {useEffect} from "react"
import Smurf from "./Smurf"
import {connect} from "react-redux"
import { fetchSmurfs } from "../actions/actions"

const SmurfList = (props) => {

    useEffect(() => {
        props.fetchSmurfs()
        console.log(props.smurfs)
    }, [])

    return (
        <div>
            {props.smurfs.map(smurf => {
                return <Smurf smurf={smurf}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)