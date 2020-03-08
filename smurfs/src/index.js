import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { reducer as smurfReducer } from './reducers/index';
import { reducer as postReducer } from './reducers/post';

const rootReducer = combineReducers({
	smurfReducer: smurfReducer,
	postReducer: postReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
