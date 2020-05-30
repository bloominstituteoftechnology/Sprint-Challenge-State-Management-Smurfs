import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

import { SmurfContext } from "../contexts/smurfContext";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const [newSmurf, setNewSmurf] = useState({});

  const addNewSmurf = (smurf) => {
    const newMember = {
      height: smurf.height,
      name: smurf.name,
      age: smurf.age,
    };

    axios
      .post("//localhost:3333/smurfs", smurf)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        console.log("LT: App.js useEffect: response.data", response.data);
        setSmurfs(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs, addNewSmurf }}>
        <SmurfForm />
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
