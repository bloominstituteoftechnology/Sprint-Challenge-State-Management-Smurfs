import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducers";

const logger = ({ getState }) => (next) => (action) => {
  console.log("Dispatching action:", action);
  next(action);
};

//4.2 Lets create our store var
let store = createStore(appReducer, applyMiddleware(thunk, logger));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
