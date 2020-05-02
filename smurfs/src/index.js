import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));