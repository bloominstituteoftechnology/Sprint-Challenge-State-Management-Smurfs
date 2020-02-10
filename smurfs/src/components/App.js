import React, { Component } from "react";
import "./App.css";

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {smurfReducer as reducer} from '../reducer/smurfReducer';
import SmurfForm from './smurfForm';
import SmurfList from "./smurfList";
import SmurfAddForm from "./smurfAddForm";



const store = createStore(reducer, applyMiddleware(thunk));


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <SmurfForm/>
          <SmurfList/>
          <SmurfAddForm/>
        </div>
      </Provider>

    );
  }
}

export default App;
