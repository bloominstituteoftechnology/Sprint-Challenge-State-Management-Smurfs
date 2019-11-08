import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const START_FETCHING = "START_FETCHING";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => console.log(res))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const addSmurf = () => dispatch => {
  axios
    .post("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: ADD_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURF_FAIL, payload: err.response }));
};
