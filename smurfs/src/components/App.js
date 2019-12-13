import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {SmurfContext} from '../context/context'
const App = () => {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        setSmurfs(res.data);
        
      })
  }, []);

    return (
      <SmurfContext.Provider>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
      </SmurfContext.Provider>
    );

}

export default App;
