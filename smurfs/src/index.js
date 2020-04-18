import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
