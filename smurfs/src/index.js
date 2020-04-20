import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import * as reducers from "./states/reducers";

const monsterReducer = combineReducers({
  count: reducers.countReducer,
  formValues: reducers.addSmurReducer,
  api: reducers.getSmurfReducer
});

const store = createStore(
  monsterReducer,
  compose(
    applyMiddleware(thunk),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);