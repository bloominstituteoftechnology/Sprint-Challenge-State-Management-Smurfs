import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const fetchSmurfs = () => dispatch => {
	console.log('here');
	dispatch({ type: FETCHING_SMURFS_START });
	axios
		.get('http://localhost:3333/smurfs')
		.then(res => {
			console.log('JIOS', res.data);
			dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err });
		});
};

export const addSmurf = smurf => dispatch => {
	console.log('smurfs', smurf);
	dispatch({ type: ADD_SMURF_START });
	console.log('smurfs', smurf);

	axios
		.post('http://localhost:3333/smurfs', smurf)

		.then(res => {
			dispatch({ type: ADD_SMURF_SUCCESS, payload: res });
		})
		.catch(err => {
			console.log(err);
		});
};
