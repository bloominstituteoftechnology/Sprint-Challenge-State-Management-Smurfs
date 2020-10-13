import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_ERROR = 'POST_SMURF_ERROR';

export function fetchSmurfs() {
	return (dispatch) => {
		dispatch({ type: FETCH_SMURF_START });
		axios
			.get('http://localhost:3333/smurfs')
			.then((res) => {
				dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: FETCH_SMURF_ERROR, payload: err });
			});
	};
}


export function postSmurfs(smurfs) {
	return (dispatch) => {
		dispatch({ type: POST_SMURF_START });
		axios
			.post('http://localhost:3333/smurfs', smurfs)
			.then((res) => {
				dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: POST_SMURF_ERROR, payload: err.res });
			});
	};
}
