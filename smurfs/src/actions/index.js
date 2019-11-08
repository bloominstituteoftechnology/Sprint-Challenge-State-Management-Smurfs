import axios from "axios";

export const SMURF_LOAD = "SMURF_LOAD";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAILED = "SMURF_FAILED";

export const WRITE_TRY = "WRITE_LOAD";
export const WRITE_SUCCESS = "WRITE_SUCCESS";
export const WRITE_FAILED = "WRITE_FAILED";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

// API url
const smurfurl = "http://localhost:3333/smurfs";

// GET actions
export const smurfLoad = () => ({ type: SMURF_LOAD });

export const smurfLoadSucc = data => ({
	type: SMURF_SUCCESS,
	payload: data
});
export const smurfLoadFailure = err => ({
	type: SMURF_FAILED,
	payload: err
});

// POST actions
export const writeTry = () => ({ type: WRITE_TRY });

export const writeSucc = data => ({
	type: WRITE_SUCCESS,
	payload: data
});
export const writeFailure = err => ({
	type: WRITE_FAILED,
	payload: err
});

export function smurfGet() {

	return function(dispatch) {
		
		dispatch(smurfLoad());
		return axios.get(smurfurl)
			.then(res => {
				clg("LOADING");
				clg(res.data);
				return res.data;
			})
			.then(json => {
				clg("SUCCESS");
				return dispatch(smurfLoadSucc(json));
			})
			.catch(err => {
				clg("Failed. Problem.");
				return dispatch(smurfLoadFailure(err));
			});
	};
}

export function smurfPost(send) {

	return function(dispatch) {
		
		dispatch(writeTry());
		return axios.post(smurfurl, send)
			.then(res => {
				clg("LOADING");
				clg(res.data);
				return res.data;
			})
			.then(json => {
				clg("SUCCESS");
				return dispatch(smurfLoadSucc(json));
			})
			.catch(err => {
				clg("Failed. Problem.");
				return dispatch(smurfLoadFailure(err));
			});
	};
}
