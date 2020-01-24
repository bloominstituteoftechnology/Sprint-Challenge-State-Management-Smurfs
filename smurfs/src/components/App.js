import React, { Component } from 'react';
import Smurfs from './Smurfs';
import Form from './Form';
import './App.css';
class App extends Component {
	render() {
		return (
			<div className='App'>
				<Smurfs />
				<Form />
			</div>
		);
	}
}

export default App;
