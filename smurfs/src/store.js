import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer, { initialState } from './reducer';

const store = createStore(reducer, initialState, applyMiddleware(thunk));
export default store;
