// ACTIONS ACTIONS ACTIONS

import axios from 'axios';


//ADD Smurf
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const getSmurfs = () => dispatch => {
  dispatch ({type: FETCH_SMURF_START})
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res.data)
    dispatch ({type: FETCH_SMURF_SUCCESS, payload: res.data})
  })
}

export const addSmurfs = smurf => dispatch => {
dispatch ({type: ADD_SMURF_START})
axios
.post('http://localhost:3333/smurfs', smurf)
.then(res => {
  dispatch ({type: ADD_SMURF_SUCCESS, payload: res.data})
})
}