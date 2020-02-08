import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { SmurfContext } from "./contexts/SmurfContext";



ReactDOM.render(<SmurfContext.Provider><App /></SmurfContext.Provider>, document.getElementById("root"));