import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from '../store';
import Smurfs from './Smurfs';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Smurfs />
			</Provider>
		);
	}
}

export default App;
