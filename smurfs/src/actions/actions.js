import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const START_FETCHING = "START_FETCHING";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios.get("http://localhost:3333/smurfs")
    .then(res => console.log(res))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};



// .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.all }))