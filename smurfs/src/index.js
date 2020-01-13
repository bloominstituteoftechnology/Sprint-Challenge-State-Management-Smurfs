import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore } from 'redux';
import { Provier } from 'react-redux';
import { smurfReducer } from './reducers/index';

import App from "./App";

const store = createStore(smurfReducer);
console.log(store);





ReactDOM.render(
<Provider store={store}>
    <App /></Provider>,
    document.getElementById("root"));
