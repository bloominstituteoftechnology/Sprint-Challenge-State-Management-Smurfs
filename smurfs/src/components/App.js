import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getData } from '../store/actions';
import SmurfList from './SmurfList';
import NewSmurfForm from './NewSmurfForm';



const App = props => {
  return (
    <div className="App">
      <h1> These are Smurfs with Redux </h1>
      <button onClick={props.getData}>Get New Smurf</button>
      <SmurfList list={props.smurfs} />
      <NewSmurfForm />
    </div>  
    );
};

const mapStateToProps = state => {
  console.log("App State", state);
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps, 
  { getData }
)(App);