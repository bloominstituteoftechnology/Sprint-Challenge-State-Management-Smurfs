import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const fetchingsmurfs = () => dispatch => {
	dispatch({ type: FETCHING_SMURFS_START });
	axios
		.get('/smurfs')
		.then(res => {
			console.log('actions success');
			dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res });
		})
		.catch(err => {
			console.log('actions success');
			dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err });
		});
};
