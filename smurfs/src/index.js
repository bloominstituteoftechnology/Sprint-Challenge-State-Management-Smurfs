import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { GlobalProvider } from "./contexts/GlobalState";
ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);
