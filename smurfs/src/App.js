import React, { useEffect, useState } from "react";
import axios from 'axios';

import { SmurfContexts } from './contexts/SmurfContexts';
import BluePersonCard from '.components/BluePersonCard';
import "./App.css";

function App() {
  const [smurfPerson, setSmurfPerson] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        setSmurfPerson(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log("No smurfs", err);
      })
  }, []);
  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfContexts.Provider value={smurfPerson}>
        <div>
          <BluePersonCard />
        </div>
      </SmurfContexts.Provider>
    </div>
  );
}

export default App;
