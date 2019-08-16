import React, { useState, useEffect } from 'react';
import "./App.css";
import { Route } from "react-router-dom"; 
import { SmurfContext } from '../contexts/SmurfContext.js'
import axios from 'axios'

//componenets
import SmurfsC from './SmurfsC.js'
import MainForm from './MainForm.js'

function App() {
  const [smurf, setSmurf] = useState([])

  useEffect( () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        // console.log(response.data)
        setSmurf(response.data)
    })
    .catch((err) => {console.log("error in smurf axios")})

  }, [])

  console.log("in App.js", smurf)

    return (
      <div className="App">
        <SmurfContext.Provider value= {{ smurf }} >
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <SmurfsC />
          <MainForm />
        </SmurfContext.Provider>
      </div>
    );
}

export default App;

// yarn add react-redux redux redux-thunk logger axios