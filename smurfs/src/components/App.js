import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs';
import { Route } from 'react-router-dom';
import { SmurfContext } from '../contexts/SmurfContext';
import FormikSmurfForm from "./FormikSmurfForm";
class App extends Component {
  render() {
    return (
      <div className="App">
         <SmurfContext.Provider value={{ Smurfs}}>
			<Route exact path="/" component={Smurfs} />
			</SmurfContext.Provider>
      <FormikSmurfForm/>
      </div>
    );
  }
}

export default App;
