import React, { Component } from "react";

import SmurfList from './smurfs/smurfList';
import SmurfForm from './smurfs/smurfForm';

import "./App.css";
import styled from 'styled-components'

const AppForm = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AppForm>
          <SmurfForm />
          <SmurfList />
        </AppForm>
      </div>
    );
  }
}

export default App;
