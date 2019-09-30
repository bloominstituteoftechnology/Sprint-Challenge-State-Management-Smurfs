import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//setup Redux in app
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

//import reducer
import { reducer } from './reducers/index';

//create store
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById("root"));
