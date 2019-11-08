import axios from "axios";

export const SMURF_LOAD = "SMURF_LOAD";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAILED = "SMURF_FAILED";

export const WRITE_TRY = "WRITE_LOAD";
export const WRITE_SUCCESS = "WRITE_SUCCESS";
export const WRITE_FAILED = "WRITE_FAILED";

export const DEL_TRY = "DEL_LOAD";
export const DEL_SUCCESS = "DEL_SUCCESS";
export const DEL_FAILED = "DEL_FAILED";

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

// DELETE actions
export const delTry = () => ({ type: DEL_TRY });

export const delSucc = data => ({
	type: DEL_SUCCESS,
	payload: data
});
export const delFailure = err => ({
	type: DEL_FAILED,
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
				clg("SENDING ");
				clg(res.data);
				return res.data;
			})
			.then(res => {
				clg("SUCCESS");
				return dispatch(writeSucc(res));
			})
			.catch(err => {
				clg("Failed. Problem.");
				return dispatch(writeFailure(err));
			});
	};
}

export function smurfDel(send) {
	clg("smurfDel", send)

	return function(dispatch) {
		
		dispatch(delTry());
		return axios.delete(`${smurfurl}/${send.id}`)
			.then(res => {
				clg("DELETING ");
				clg(res.data);
				return res.data;
			})
			.then(res => {
				clg("SUCCESS");
				return dispatch(delSucc(res));
			})
			.catch(err => {
				clg("Failed:", err);
				return dispatch(delFailure(err));
			});
	};
}
