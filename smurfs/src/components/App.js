import React, { Component } from "react";
import "./App.css";
import Form from './Form';
import {Cards} from './Cards';
import { connect } from "react-redux";
const App = (props) =>{

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <Cards name={props.name} height={props.height} age={props.age} id={props.id}/>
      </div>
    );
    }
const mapStateToProps = state =>{
  console.log("APP:", state);
  return{
    ...state.smurf
  }
}

export default connect(mapStateToProps, {})(App)
