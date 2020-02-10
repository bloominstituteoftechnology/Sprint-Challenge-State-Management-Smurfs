import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import thunk from 'redux-thunk';
import reducer from "./reducers/reducer.js";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));