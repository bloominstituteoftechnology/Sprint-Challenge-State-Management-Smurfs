import React from 'react'
import axios from 'axios'

//(was not needed for project)
// export const ADD_SMURF = 'ADD_SMURF'
// export const add_smurf = (item) => {
//     console.log(`add feature`, item)
//     return { type: ADD_SMURF, payload: item }
// };
// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const NEW_SMURF_FETCH = 'NEW_SMURF';
export const NEW_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const NEW_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

// action creator
//fetchVillage imports to Village
export const fetchVillage = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // from thunk (see below) do some async action and dispatch an error or success action
  axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

//imports to NewSmurf.js
export const new_smurf = (smurf) => (dispatch) => {
	dispatch({ type: NEW_SMURF_FETCH });

	return axios
		.post(`http://localhost:3333/smurfs`, smurf)
		.then((res) => dispatch({ type: NEW_SMURF_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: NEW_SMURF_FAILURE, payload: err }));
};


//.then(res => console.log(res))
//.then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))

//thunk process
// redux thunk
// const thunk = next => action => store => {
//   if (typeof action === 'object') {
//     next(action); // forward action untouched
//   } else if (typeof action === 'function') {
//     action(store.dispatch) // stop the action and call the function
//   }
// }