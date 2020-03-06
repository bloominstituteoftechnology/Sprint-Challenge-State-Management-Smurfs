import React, { useEffect, useState } from "react";
import axios from 'axios';

import { SmurfContexts } from './contexts/SmurfContexts';
import BluePersonCard from './components/BluePersonCard';
import BluePersonList from './components/BluePersonList';
import AddSmurfForm from './components/AddSmurfForm';
import "./App.css";

function App() {
  const [smurfPerson, setSmurfPerson] = useState([]);

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

  // const addSmurf = smurf => {
  //   axios
  //   .post("http://localhost:3333/smurfs", smurf)
  //   .then(res => {
  //     setSmurfPerson(res.data)
  //   })
  //   .catch(err => console.error(err));
  // }
  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <BluePersonCard />
      <SmurfContexts.Provider value={smurfPerson}>
        
        <BluePersonList />
  
        <AddSmurfForm />
        
      </SmurfContexts.Provider>
    </div>
  );
}

export default App;
