import React from 'react'
import axios from 'axios'


export const ADD_SMURF = 'ADD_SMURF'
export const add_smurf = (item) => {
    console.log(`add feature`, item)
    return { type: ADD_SMURF, payload: item }
};
// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const NEW_SMURF = 'NEW_SMURF';
export const NEW_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const NEW_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

// action creator
export const fetchVillage = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const new_smurf = (smurf) => (dispatch) => {
	dispatch({ type: NEW_SMURF });

	return axios
		.post(`http://localhost:3333/smurfs`, smurf)
		.then((res) => dispatch({ type: NEW_SMURF_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: NEW_SMURF_FAILURE, payload: err }));
};


//.then(res => console.log(res))
//.then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))