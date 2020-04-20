import React, {useContext, useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {useForm} from 'react-hook-form';
import SmurfReducer from './reducers/SmurfReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(SmurfReducer,applyMiddleware(thunk))





ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
