import React from "react";
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Smurfs</h2>
      <SmurfForm/>
      <SmurfList />
    
    </div>
  );
}

export default App;