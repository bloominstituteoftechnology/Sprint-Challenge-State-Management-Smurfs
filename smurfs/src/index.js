import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { smurfReducer } from './reducers';

import App from "./App";

const middleware = [thunk];

const store = createStore(smurfReducer, initialState, applyMiddleware(...middleware));
console.log(store);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
    document.getElementById("root"));
