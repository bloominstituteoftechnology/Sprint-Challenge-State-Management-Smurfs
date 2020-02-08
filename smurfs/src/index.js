import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './components/App';
import * as serviceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {smurfsReducer as reducer } from './reducers'
import thunk from 'redux-thunk';

export const middlewares = [thunk];

const store = createStore(reducer , applyMiddleware(...middlewares))

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>
    , document.getElementById('root'));
    
serviceWorker.unregister();