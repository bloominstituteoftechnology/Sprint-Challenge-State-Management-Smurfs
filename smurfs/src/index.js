import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/App";
import logger from "redux-logger";

ReactDOM.render(<Provider><App /></Provider>, document.getElementById("root"));
