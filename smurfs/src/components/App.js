import React, { useEffect, useState } from "react";
import axios from 'axios';

import { smurfContexts } from '../contexts/smurfContexts';
import BluePersonCard from '../components/BluePersonCard';
import "./App.css";

function App() {
  const [bluePerson, setBluePerson] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        setBluePerson(res.data);
      })
      .catch(err => {
        console.log("No smurfs", err);
      })
  }, []);
  
  return (
    <div className="App">
      <smurfContexts.Provider value={bluePerson}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>
          <BluePersonCard />
        </div>
      </smurfContexts.Provider>
    </div>
  );
}

export default App;
