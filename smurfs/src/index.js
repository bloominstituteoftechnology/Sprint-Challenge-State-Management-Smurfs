import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
// import { createContext } from "react";


ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
);