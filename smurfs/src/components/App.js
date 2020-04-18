import React, { Component } from "react";
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
//COMPONENTS 
import SmurfList from "./SmurfList"
import {SmurfForm} from "./SmurfForm"
import {rootReducer} from "../Reducers/SmurfReducer"
//STYLES
import "./App.css";

const store = createStore(rootReducer, applyMiddleware(thunk)) // need to add root reducer

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
        
        <SmurfList/>
      </div>
      </Provider>
    );
  }
}

export default App;
