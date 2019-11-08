import React from "react";
import ReactDOM from "react-dom";
import logger from 'redux-logger';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './actions/actions.js';
import "./index.css";
import App from "./components/App";

const store = createStore(reducer);


ReactDOM.render(
<Provider store = { store }>
    <App />
</Provider>, document.getElementById("root"));
