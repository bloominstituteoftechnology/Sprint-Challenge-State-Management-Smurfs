import React, {useReducer} from 'react'
import { connect } from "react-redux";
import {fetchSmurfs} from './actions'
 import {reducer} from '../components/reducer'






 const SmurfList = (props) => {
   console.log(props.smurfs)
   const [state, dispatch] = useReducer(reducer, props.smurfs);


  return (
    <div className="container">
      <>
      <button onClick={() => props.dispatch(fetchSmurfs())}>Get Data</button>
      {props.isFetching && <div>⏰</div>}
      {props.error && <div>{props.error.message}</div>}
      <ul>
        {props.smurfs.map(p => (
          <li className="pokemon" key={p.name}>
            {p.name}, {p.age} years old, {p.height} tall!
          </li>
        ))}
      </ul>
      </>
      
    </div>
  );
}




const mapDispatchToProps = {
  // Action Creators go here!
  fetchSmurfs
};

export default connect(state => {
  console.log("mapStateToProps.STATE", state);
  return state;
  // return { isFetching: state.isFetching, pokemon: state.pokemon };
})(SmurfList);
