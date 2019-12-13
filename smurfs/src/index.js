import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import configRedux from "./reduxConfig";
import { Provider } from "react-redux";


const store = configRedux();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);