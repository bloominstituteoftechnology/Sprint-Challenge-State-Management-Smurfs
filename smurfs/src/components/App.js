import React, { Component } from "react";

import "./App.css";
import { smurfContext } from "../context/smurfContext";
import SmurfList from "./Smurflist";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <smurfContext.Provider value={""}>
          {" "}
          <SmurfList />
        </smurfContext.Provider>
      </div>
    );
  }
}

export default App;
