import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers';
import './index.css';
import App from './components/App';

//create store
const store = createStore(reducer, applyMiddleWare(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
