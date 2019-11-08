import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./components/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./components/App";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);