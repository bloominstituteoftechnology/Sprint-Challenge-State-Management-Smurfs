import React, {useState, useContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware} from 'redux';

 


ReactDOM.render(<App />, document.getElementById("root"));
