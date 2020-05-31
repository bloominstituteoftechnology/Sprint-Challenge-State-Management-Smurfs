import React from "react";
import "./App.css";

// Components
import Smurfs from "./Smurfs/Smurfs";
import SmurfForm from "./SmurfForm/SmurfForm";

// Hooks
import { useSmurfs } from "../hooks/useSmurfs";

// Contexts
import { SmurfContext } from "../contexts/SmurfContext";

const App = () => {
  const [smurfs, dispatch] = useSmurfs();
  return (
    <SmurfContext.Provider value={{ smurfs, dispatch }}>
      <SmurfForm />
      <Smurfs />
    </SmurfContext.Provider>
  );
};

export default App;
