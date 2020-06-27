import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { Reducer } from "./Reducers/reducers";

const composeEnhance = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhance(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
