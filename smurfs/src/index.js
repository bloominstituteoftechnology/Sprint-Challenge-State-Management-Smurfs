import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { SmurfProvider } from "./components/contexts/SmurfContext";

ReactDOM.render(
  <SmurfProvider>
    <App />
  </SmurfProvider>,
  document.getElementById("root")
);
