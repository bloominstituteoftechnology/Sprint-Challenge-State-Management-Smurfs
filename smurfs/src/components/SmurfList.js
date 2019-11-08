import React/*, {useReducer} */from 'react'
import { connect } from "react-redux";
import {fetchSmurf} from './actions'
// import {initialState, reducer} from '../components/reducer'






 const SmurfList = (props) => {
   console.log(props)
  // const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="container">
      
    </div>
  );
}




const mapDispatchToProps = {
  // Action Creators go here!
  fetchSmurf
};

export default connect(state => {
  console.log("mapStateToProps.STATE", state);
  return state;
  // return { isFetching: state.isFetching, pokemon: state.pokemon };
})(SmurfList);
