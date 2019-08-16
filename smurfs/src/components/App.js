import React, { useState } from 'react';
import "./App.css";

import { SmurfContext } from '../contexts/SmurfContext.js'


function App() {
  const [smurf, setSmurf] = useState([])
    return (
      <div className="App">
        <SmurfContext.Provider value= {{smurf}} >
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </SmurfContext.Provider>
      </div>
    );
}

export default App;

// yarn add react-redux redux redux-thunk logger axios