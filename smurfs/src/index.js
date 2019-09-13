import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//Import CreateStore and Provider

import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import { reducer } from './store/reducers';



const composeEnhancers = compose;

// STORE
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render (
<Provider store={store}>
<App />
</Provider>, 
document.getElementById("root"));
