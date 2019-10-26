import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import { compose } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer as smurfReducer } from './reducers/smurf';

import "./index.css";

import App from "./components/App";

const rootReducer = combineReducers({
   smurf: smurfReducer,
});

// const store = createStore(rootReducer, compose(applyMiddleware([thunk, logger]));
const store = createStore(rootReducer, applyMiddleware(thunk, logger));



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  
