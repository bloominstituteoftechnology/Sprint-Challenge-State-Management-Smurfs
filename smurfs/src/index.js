import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import { smurfReducer } from "./reducers/smurfReducer";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const store = createStore(smurfReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
