import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer.js';
import "./index.css";
import App from "./components/App";

export const store = createStore(reducer);
console.log({store})

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

