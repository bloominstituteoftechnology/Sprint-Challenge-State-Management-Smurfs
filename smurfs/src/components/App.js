import React, { useState } from "react";
import "./App.css";
import Smurfs from './Smurfs'
import Form from './Form'
import axios from 'axios'

const App = () => {


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs/>
      

      </div>
    );
}

export default App;
