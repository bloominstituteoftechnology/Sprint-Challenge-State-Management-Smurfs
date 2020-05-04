import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from '../store';

class App extends Component {
	render() {
		return (
			<Provider store={stora}>
				<div className="App">
					<h1>SMURFS! 2.0 W/ Redux</h1>
					<div>Welcome to your state management version of Smurfs!</div>
					<div>Start inside of your `src/index.js` file!</div>
					<div>Have fun!</div>
				</div>
			</Provider>
		);
	}
}

export default App;
