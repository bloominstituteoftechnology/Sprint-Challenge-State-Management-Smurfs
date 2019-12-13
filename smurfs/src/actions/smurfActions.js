import axios from "axios";

// MARK: - custom state machine logic
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
	dispatch({ type: FETCH_SMURF_START });
	axios.get("http://localhost:3333/smurfs")
		 .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
		 )
		 .catch(err => dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response.statusText })
		 )
};

// export const postSmurf = (smurf) => dispatch => {
// 	dispatch({ type: POST_SMURF_START });
// 	axios.post("url", { smurf.name, smurf.age, smurf.height })
// 		 .then(res => dispatch( type: POST_SMURF_SUCCESS, payload: res.data))
// 		 .catch(err => dispatch( type: POST_SMURF_FAILURE, payload: res.message))
// }