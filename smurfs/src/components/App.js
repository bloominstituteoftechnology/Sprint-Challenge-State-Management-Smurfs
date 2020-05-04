import React, { Component } from "react";
import { SmurfsProvider } from './SmurfsContext'
import AddSmurf from './AddSmurf'

import "./App.css";
import { Smurfs } from "./Smurfs";
import PostForm from "./PostForm";

class App extends Component {

  render() {
    return (
      <SmurfsProvider>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Context API</h1>
        </div>
        <PostForm />
        {/* <AddSmurf /> */}
        <Smurfs />
      </SmurfsProvider>
    );
  }
}

export default App;
