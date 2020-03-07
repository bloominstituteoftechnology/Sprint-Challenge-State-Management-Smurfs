import React, { useState, useEffect } from "react";
import "./App.css";

// Context
import SmurfContext from '../context.js/SmurfContext';

function App () {
const [data, setData] = useState([])


// useEffect(() => {

// });

    return (
      <div className="App">
      <SmurfContext.Provider value={data}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
      </SmurfContext.Provider> 
      </div>
    );
}

export default App;
