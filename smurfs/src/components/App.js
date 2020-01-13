import React, { useState, useEffect} from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import axios from "axios"
import "./App.css";
import List from "./List"
import Form from "./Form"

function App() {
  const [smurfs, setSmurfs] = useState([]);
  const addSmurf = newSmurf => {
    setSmurfs([...smurfs, newSmurf]);
  };
  useEffect(() => {
    axios
      .get(
        "http://localhost:3333/smurfs"
      )
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <SmurfContext.Provider value={{ addSmurf, smurfs }}>
      <div className="App">
        <h1>Smurfville</h1>
        <Form></Form>
        <List></List>
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
