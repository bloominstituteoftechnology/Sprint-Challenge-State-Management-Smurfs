import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions/action";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";



const SmurfList = props => {
  const initSmurfs = props.getSmurfs
  useEffect (() => {
    initSmurfs()
  }, [initSmurfs])

  return (
    <>
    <button onClick={()=>props.getSmurfs()
        }>
            {props.isFetching ? "error": "Get Pokemon"}
        </button>
        <div className = "Smurf_cards">
{ props.smurfs && props.smurfs.map
    ((item) => <Smurfs 
    name={item.name}
    height={item.height}
    age={item.age}/>
    ) 
}
</div>
</>);
}
const mapStateToProps = state => {
  console.log(state)
  return {
    smurf: state.smurf,
    error: state.error
  }
  };

export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfList);