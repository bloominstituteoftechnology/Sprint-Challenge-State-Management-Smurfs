import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { SmurfContext } from "../contexts/SmurfContext";
import SmurfsList from "./SmurfsList";
import AddSmurfs from "./AddSmurfs";
import background from "../SmurfBackground.jpg";

const Style = styled.div`
  #background {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    object-fit: cover;
    top: 0;
  }
  > div {
    max-width: 800px;
    margin: 0 auto;
    h1 {
      text-align: center;
      color: white;
      background: rgb(0, 0, 0, 0.3);
      padding: 2rem;
      border-radius: 1rem;
    }
  }
`;

function App() {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const addSmurfs = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  };

  const deleteSmurf = smurfId => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <SmurfContext.Provider
      value={{ smurfs, setSmurfs, addSmurfs, deleteSmurf }}
    >
      <Style>
        <img id="background" src={background} alt="background" />
        <div>
          <h1>SMURFS! 2.0 W/ CONTEXT API</h1>
          <SmurfsList />
          <AddSmurfs />
        </div>
      </Style>
    </SmurfContext.Provider>
  );
}

export default App;
