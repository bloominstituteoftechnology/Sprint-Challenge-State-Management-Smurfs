import React, { useState, useEffect } from "react";
import axios from "axios";
import SmurfCard from "./smurfCard";
import  smurfContext  from "../context/smurfContext";

// Components

function App() {
  const [smurf, setSmurf] = useState({});
  useEffect(() => {
    axios

      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurf({ data: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(smurf);
  return (
    <div className="App">
      <smurfContext.Provider value={smurf}>
        <SmurfCard />
      </smurfContext.Provider>
    </div>
  );
}

export default App;
