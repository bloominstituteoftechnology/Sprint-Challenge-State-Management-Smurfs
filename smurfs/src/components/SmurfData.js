import React from "react";
import { connect } from "react-redux";
import {fetchSmurfs, postSmurfs} from '../actions'
import SmurfForm from "./SmurfForm";

const SmurfData = props => {
console.log('props', props)
    return(
        <>
        <button onClick={props.fetchSmurfs}>Get Data</button>
        {props.isFetching && <div></div>}
      {props.error && <div>{props.error.message}</div>}
        <div>
            {props.smurfs.map(smurf => (
                <>
                    <p className="smurfs" key={smurf.name}
                    >{smurf.name}</p>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                    </>
            ))}
            <SmurfForm
            postSmurfs={props.postSmurfs}
            smurfs={props.smurfs}
            />
        </div>

        </>
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
    mapStateToProps, {fetchSmurfs, postSmurfs}
  )(SmurfData);