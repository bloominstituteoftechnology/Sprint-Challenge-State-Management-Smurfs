import React, { useState, useEffect } from "react";
import axios from "axios";
import ListSmurf from "./listSmurf";
import NewSmurf from "./newSmurf";
import { smurfContext } from "../context/smurfContext";

// Components

const App = () => {
  const [smurf, setSmurf] = useState();
  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then(res => {
        setSmurf(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  const newSmurf = smurf => {
    axios.post("http://localhost:3333/smurfs", smurf).then(res => {
      setSmurf(res.data);
    })
    .catch(err => console.log(err));
  };
  return (
      <smurfContext.Provider value={{smurf, setSmurf}}>
      <div className="App">
        <ListSmurf />
        <NewSmurf />
      </div>
      </smurfContext.Provider>
  );
};

export default App;
