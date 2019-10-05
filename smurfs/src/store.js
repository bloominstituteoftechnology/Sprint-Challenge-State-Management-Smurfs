import {createStore, applyMiddleWare} from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleWare(...middleWare))

export store;