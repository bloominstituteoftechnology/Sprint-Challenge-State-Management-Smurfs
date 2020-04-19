import React, { Component, useState } from "react";
import "./App.css";
import SmurfList from './SmurfList.js';
import Form from './Form.js';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <SmurfList />
      </div>
    );
  }
};

export default App;
