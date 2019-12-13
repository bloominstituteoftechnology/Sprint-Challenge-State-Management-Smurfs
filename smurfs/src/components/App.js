import React from "react";
import {connect} from 'react-redux';
import {getVillage} from '../actions'


import "./App.css";
const App = props => {
  
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        {!props.village && !props.isSmurfing && <p>Gather the Smurfs!</p>}
        {props.isSmurfing && <p>Gathering the village...</p>}
        <button onClick={props.getVillage}>Calling all smurfs!</button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    village: state.village,
    isSmurfing: state.isSmurfing,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    //actions
    getVillage
  }
)(App);
