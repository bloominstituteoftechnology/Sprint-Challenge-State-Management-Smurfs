import React, { Component, useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

//context
import { SmurfContext } from '../context/smurfcontext';


//components
import SmurfForm from './smurfform';
import SmurfList from './smurflist';

class App extends React.Component {

  constructor() {
    super();
    this.state ={
      smurfs:[],
    }
  }
  componentDidMount(){
    axios
        .get('http://localhost:3333/smurfs')
        .then((response) => {
          //console.log(response.data,"response here")
          const smurfsList = response.data
          this.setState({smurfs: smurfsList});
        })
        .catch((err) => (err));
    };

  render(){
    return (
      <SmurfContext.Provider value={this.state.smurfs}>
        <h1>Welcome to Smurf Village</h1>
        <SmurfList />
        <SmurfForm />
      </SmurfContext.Provider>
 
    );
  }
}

export default App;