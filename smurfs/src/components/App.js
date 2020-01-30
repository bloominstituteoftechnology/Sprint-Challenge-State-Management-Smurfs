import React, { Component } from "react";
import "./App.css";
import Alert from './audio';
import Village from './village'
import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Alert>
 <audio ref="audio_tag" src="./assets/The_Smurfs_Song.mp3" controls autoPlay/>
 </Alert>
        <h1>WELCOME TO THE SMURFS!</h1>
        <SmurfList />
        
      </div>
    );
  }
}

export default App;