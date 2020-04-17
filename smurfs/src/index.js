import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  );


ReactDOM.render(
<Provider>
    <App store={store}/>
</Provider>


, document.getElementById("root"));
