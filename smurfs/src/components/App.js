import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// components
import Smurf from "./Smurf.js";

// contexts
import SmurfContext from "../contexts/SmurfContext.js";




function App() {


  const [smurf, setSmurf] = useState({
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  });

  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => response.data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }, [])


    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3333/smurfs', smurf)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        }) 
  }


    return (
      <div className="App">
      <SmurfContext.Provider value={smurf}>
        <Smurf />
      </SmurfContext.Provider>
      </div>
    );
}

export default App;
