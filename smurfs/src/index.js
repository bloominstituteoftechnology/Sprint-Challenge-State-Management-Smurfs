import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer as reducer } from './reducers';
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
