import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { SmurfContext } from './context/SmurfContext';
import SmurfList from './components/SmurfList';


const App = () => {  

  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        // console.log('Inside of axios.then:', res.data)
        setSmurfs(res.data)
    })
    .catch(err => {
        console.log('data.js > axios err:', err)
    })

  }, []);

  // console.log('Outside of axios call > line 24:', smurfs)

  return (    
    <div className="App">
      <SmurfContext.Provider value={{smurfs, setSmurfs}}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
        {/* <Smurf /> */}
      </SmurfContext.Provider>
    </div>   
  );
}

export default App;