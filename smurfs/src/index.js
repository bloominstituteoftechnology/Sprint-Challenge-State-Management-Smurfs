import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Reducer} from './components/Reducer';
import thunk from 'redux-thunk';
import {compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>    
<App />
</Provider>, document.getElementById("root"));
