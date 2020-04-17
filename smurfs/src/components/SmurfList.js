import React, { useEffect } from "react";
import { connect } from "react-redux";

import {getSmurfs} from "../actions"

const SmurfList = props => {
    console.log("smurflist props: ",props)

    useEffect(()=>{
        props.getSmurfs();
    },[])

    return (
        <>  
            hello from smurf list
        </>
    )
}

const mapStateToProps = state => {
    console.log("smurflist mapstatetoprops state:",state)
    return {
    //   smurfs: state.smurfs,
    //   fetchingSmurfs: state.fetchingSmurfs,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(SmurfList);