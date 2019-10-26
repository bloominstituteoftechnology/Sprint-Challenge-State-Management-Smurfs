import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'
import {reducer as postReducer} from './reducers'
import {reducer as smurfReducer} from './reducers'


const rootReducer = combineReducers({
    postReducer,
    smurfReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk,logger))


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById("root"));
