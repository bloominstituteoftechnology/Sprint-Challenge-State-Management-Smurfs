import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//Import CreateStore and Provider

import { CreateStore } from 'redux';
import { Provider } from 'react-redux';

//Import SmurfList
import SmurfList from './components/SmurfList';




// STORE
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render (
<Provider store={store}>
<App />
</Provider>, 
document.getElementById("root"));
