import React, { Component } from "react";
import "../styles/App.scss";

//components
import GridContainer from './GridContainer'
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <GridContainer />
        </Container>
      </div>
    );
  }
}

export default App;
