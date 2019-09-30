import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers/reducer";
import {Provider} from "react-redux";
import App from "./components/App";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
