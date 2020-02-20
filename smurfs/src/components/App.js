import React, { useEffect, useState } from "react";
import axios from 'axios';

import { SmurfContexts } from '../contexts/SmurfContexts';
import BluePersonCard from '../BluePersonCard';
import "./App.css";

function App() {
  const [smurfPerson, setSmurfPerson] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        setSmurfPerson(res.data);
      })
      .catch(err => {
        console.log("No smurfs", err);
      })
  }, []);
  
  return (
    <div className="App">
      <SmurfContexts.Provider value={smurfPerson}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <BluePersonCard />
        </div>
      </SmurfContexts.Provider>
    </div>
  );
}

export default App;
