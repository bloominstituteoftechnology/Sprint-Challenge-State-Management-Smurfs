import axios from "axios";

export const SMURF_LOAD = "BB_LOAD";
export const SMURF_SUCCESS = "BB_SUCCESS";
export const SMURF_FAILED = "BB_FAILED";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const smurfurl = "http://localhost:3333/smurfs";

export const smurfLoad = () => ({ type: SMURF_LOAD });

export const smurfLoadSucc = data => ({
	type: SMURF_SUCCESS,
	payload: data
});
export const smurfLoadFailure = err => ({
	type: SMURF_FAILED,
	payload: err
});

export function smurfGet() {

	return function(dispatch) {
		
		dispatch(smurfLoad());
		return axios(smurfurl)
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
