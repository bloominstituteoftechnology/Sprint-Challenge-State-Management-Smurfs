import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

//context
import { SmurfContext } from '../context/smurfcontext';


//components
import SmurfForm from './smurfform';
import SmurfList from './smurflist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
