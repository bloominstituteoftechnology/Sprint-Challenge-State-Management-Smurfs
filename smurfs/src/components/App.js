import React, { useState } from "react";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h2>Smurfs!</h2>
      <Smurf />
      <SmurfForm />
    </div>
  );
};

export default App;
