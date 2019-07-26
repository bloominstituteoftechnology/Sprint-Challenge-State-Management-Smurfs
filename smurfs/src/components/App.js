import React, { Component } from "react";
import "../styles/App.scss";

//components
import GridContainer from './GridContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GridContainer />
      </div>
    );
  }
}

export default App;
