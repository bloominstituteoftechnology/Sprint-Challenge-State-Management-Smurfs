import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from './store/reducers'

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(rootReducer, applyMiddleware(thunk, logger))
//import reducer

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
