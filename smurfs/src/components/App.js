import React, { createContext } from "react";
import "./App.css";

// Components
import Smurfs from "./Smurfs/Smurfs";

// Hooks
import { useSmurfs } from "../hooks/useSmurfs";

// Contexts
import { SmurfContext } from "../contexts/SmurfContext";

const App = () => {
  const [smurfs, dispatch] = useSmurfs();
  return (
    <SmurfContext.Provider value={{ smurfs, dispatch }}>
      <Smurfs />
    </SmurfContext.Provider>
  );
};

export default App;
