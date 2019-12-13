import React from "react";
import { connect } from "react-redux";

const SmurfData = props => {

    return(
        <div>
            {props.smurfs.map(smurf => (
                    <p>{smurf.name}</p>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return{
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching 
    }
  };

export default connect( 
    mapStateToProps, {}
  )(SmurfData);