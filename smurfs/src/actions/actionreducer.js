import axios from 'axios';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_ERROR = 'POST_SMURF_ERROR';

export function postSmurfs(payload) {
	return (dispatch) => {
		dispatch({ type: POST_SMURF_START });
		axios
			.post('http://localhost:3333/smurfs', payload)
			.then((res) => {
				dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: POST_SMURF_ERROR, payload: err });
			});
	};
}
