import React, { Component } from "react";
import styled from 'styled-components'
import "./App.css";
import SmurfList from "./SmurfsCards/SmurfList";
import SmurfForm from "./SmurfsCards/SmurfForm";
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <FormList>
          <SmurfForm />
          <SmurfList />
        </FormList>
      </div>
    );
  }
}

export default App;

const FormList = styled.div`
  display: flex;
  justify-content: space-evenly;
`;