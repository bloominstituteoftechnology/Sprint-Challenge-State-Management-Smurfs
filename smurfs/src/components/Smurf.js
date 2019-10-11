import React, {useEffect} from "react";
import SmurfCard from "./SmurfCard";
import {connect} from "react-redux";

function Smurf(props) {

    useEffect(() => {
        console.log(props.smurfs)
    }, [props.smurfs])

    console.log(props.smurfs);
    props.smurfs.map(smurf => console.log(smurf))
    return (
        <div>
            {props.smurfs.map(smurf => {
                console.log(smurf.id)
                return <SmurfCard smurf={smurf} key={smurf.id} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurf)