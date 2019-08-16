import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs';
import { Route } from 'react-router-dom';
import { SmurfContext } from '../contexts/SmurfContext';
class App extends Component {
  render() {
    return (
      <div className="App">
         <SmurfContext.Provider value={{ Smurfs}}>
			<Route exact path="/" component={Smurfs} />
			/>
			</SmurfContext.Provider>
      </div>
    );
  }
}

export default App;
