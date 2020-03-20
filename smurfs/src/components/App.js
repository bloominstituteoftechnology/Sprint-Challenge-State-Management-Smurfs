import React, { useEffect } from 'react';
import  fetchSmurfs  from '../actions/index';
import { connect } from 'react-redux';
import Form from '../Form'
import CardList from '../components/CardList'
import './App.css';
import smurfs from './images/smurfs.png'

function App(props) {

	useEffect(() => {
			props.fetchSmurfs();
		},[fetchSmurfs]);

	return (
		<div className="App">
			<h1>WELCOME TO THE Smurf Village!!</h1>
			<img className='logo' src={smurfs} alt='smurfs' />
			
			<div >			
				<Form />
				<CardList />
			</div>
		
	
		</div>
	);
}



const mapDispatchToProps = {
	fetchSmurfs
};

export default connect(null, mapDispatchToProps)(App);
