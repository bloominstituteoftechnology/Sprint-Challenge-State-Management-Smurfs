import React, { useEffect } from 'react';
import { fetchSmurfs } from '../actions';
import { postSmurfs } from '../actions/actionreducer';
import { connect } from 'react-redux';
import './App.css';
import styled from 'styled-components';
import Form from "../Form";

const Smurfed = styled.div`
	align-items: center;
	border-bottom: 1px solid rgb(221, 221, 221);
	height: 70px;
	justify-content: space-between;
	padding: 0 3%;
	width: 100vw;
	-webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
	-moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
	box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
	text-align: center;
	margin: auto;
`;
const H1 = styled.h1`
	align-item: center;
	color: #f5ea74;
	font-size: 4rem
`;

const Card = styled.div`
	width: 300px;
	color: white;
	background-color: green;
	height: 100px;
	opacity: 80%;
	text-align: center;
	border-radius: 20px;
	margin: auto;
	padding:10px;
	font-size: 1.5rem
`;


function App(props) {
	// const [ newSmurf, setNewSmurf ] = useState({
	// 	name: '',
	// 	age: '0',
	// 	height: ''
	// });

	// const handleChanges = (e) => {
	// 	setNewSmurf({
	// 		...newSmurf,
	// 		[e.target.name]: e.target.value
	// 	});
	// };
	//
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	props.postSmurfs(newSmurf);
	// 	setNewSmurf();
	// };

	const { fetchSmurfs } = props;
	useEffect(
		() => {
			fetchSmurfs();
		},
		[ fetchSmurfs ]
	);
	return (
		<Smurfed>
			<H1>WELCOME TO THE SMURFVILLE!!</H1>
			<Form />
			<div>
				{props.smurfError && <p>Error: {props.smurfError} </p>}
				{props.isSmurfLoading ? (
					<div>Smurf is Loading...</div>
				) : (
					props.smurfFilm.map((smurf) => (
						<Card key={smurf.name}>
							Name: {smurf.name} <br />
							Age: {smurf.age} <br />
							Height: {smurf.height}
						</Card>
					))
				)}
			</div>
		</Smurfed>
	);
}

function mapStateToProps(state) {
	return {
		smurfFilm: state.smurfReducer.film,
		isSmurfLoading: state.smurfReducer.isLoading,
		smurfError: state.smurfReducer.error
	};
}

const mapDispatchToProps = {
	fetchSmurfs,
	postSmurfs
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
