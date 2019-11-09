import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_FAILED = "POST_SMURF_FAILED";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const START_FETCHING = "START_FETCHING";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
};

export const postSmurf = (addSmurf) => dispatch => {
  dispatch({ type: POST_SMURF });
  axios
    .post("http://localhost:3333/smurfs", addSmurf)
    .then(res => dispatch({ type: POST_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: POST_SMURF_FAILED, payload: err }));
};

export function addSmurf(name, age, height) {
    return (dispatch) => {
        dispatch({ type: ADD_SMURF, payload: { name, age, height }})
    }
}


// dispatch({ type: FETCH_SUCCESS, payload: res })