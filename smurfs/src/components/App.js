import React from "react";
import "./App.css";

// Components
import Smurfs from "./Smurfs";

// Hooks
import { useSmurfs } from "../hooks/useSmurfs";

const App = () => {
  const [state, dispatch] = useSmurfs();
  return <Smurfs />;
};

export default App;
