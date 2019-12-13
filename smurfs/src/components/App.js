import React from "react";
import "./App.css";

import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";



function App() {
  return (
    <div className="App">
    	<div className="smurf-split">
	      <Smurfs />
	      <SmurfForm />
      	</div>
    </div>
  );
}

export default App;
