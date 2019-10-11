import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import thunk from "redux-thunk";

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import * as reducers from "./state/reducers";
import { Provider } from "react-redux";
import App from "./components/App";

export const monsterReducer = combineReducers({
  smurfData: reducers.smurfReducer,
  formInputValues: reducers.formReducer
});

export const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
