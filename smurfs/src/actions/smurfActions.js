import axios from "axios";

// MARK: - custom state machine logic
// MARK: - GET REQUEST
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

// MARK: - POST REQUEST
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
	dispatch({ type: FETCH_SMURF_START });
	axios.get("http://localhost:3333/smurfs")
		 .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
		 )
		 .catch(err => dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response.statusText })
		 )
};

// smurf will be an object
export const postSmurf = (smurf) => dispatch => {
	dispatch({ type: POST_SMURF_START });
	axios.post("http://localhost:3333/smurfs", smurf)
		 .then(res => console.log(res))/*dispatch( type: POST_SMURF_SUCCESS, payload: res.data))*/
		 .catch(err => console.log(err))/*dispatch( type: POST_SMURF_FAILURE, payload: res.message))*/
}