import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware  } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { AppReducer } from './components/reducer/reducerIndex';






const applicationStore = createStore(AppReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store = {applicationStore}>
       <App /> 
    </Provider>,

document.getElementById("root"));
