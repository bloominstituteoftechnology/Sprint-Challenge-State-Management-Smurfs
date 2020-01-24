import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchState} from '../actions/index'
import Smurfs from './Smurfs'
import "./App.css";

const App = props => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs smurfs={props.smurfs}/>
      </div>
    )

}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {fetchState})(App);
