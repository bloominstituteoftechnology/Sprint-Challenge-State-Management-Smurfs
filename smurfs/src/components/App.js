import React, { Component } from "react";
import * as actionCreators from '../state/actionCreator';
import {connect} from "react-redux";
import Smurf from './Smurf';
import Form from './Form';
import "./App.css";
const App = props => {

  
    return (
      <div className="App">
        <Smurf />
        <Form />
      </div>
    );
  
}

export default connect(
  state => state,
  actionCreators
)(App);

