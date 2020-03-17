import React, { useEffect } from 'react';
import  fetchSmurfs  from '../actions/index';
import { connect } from 'react-redux';
import Form from '../Form'
import CardList from '../components/CardList'
import './App.css';


function App(props) {

	useEffect(() => {
			props.fetchSmurfs();
		},[]);

	return (
		<div className="App">
	
			<h1>WELCOME TO THE Smurf Village!!</h1>
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
