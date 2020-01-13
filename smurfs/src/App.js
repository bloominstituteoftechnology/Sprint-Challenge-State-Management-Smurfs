import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import SmurfList from './components/SmurfList';
import AddSmurf from './components/AddSmurf';

function App() {
  
    return (
      <div className="App">
        <SmurfList />
        <AddSmurf />
      </div>
    );
  }


const mapStateToProps =(state) => {
  return {
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id
  };
}

export default connect(null, mapStateToProps)(App);
