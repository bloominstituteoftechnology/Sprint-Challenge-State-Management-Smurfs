import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';



export const getSmurfs = () => dispatch => {
  dispatch({  type: GET_SMURFS_START });

  axios
  .get('http://localhost:3333/smurfs')
  .then( res => {
    console.log(res)
    dispatch({
      type: GET_SMURFS_SUCCESS,
      payload: res
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: GET_SMURFS_FAIL,
      payload: 'No smurfs available.'
    })
  })
}

export const addSmurf = () => dispatch => {
  dispatch({ type: ADD_SMURF_START });

  axios
  .post('')
  .then()
  .catch(err => {
    console.log(err)
    dispatch({
      type: ADD_SMURF_FAIL,
      payload: 'Failed to add smurf!'
    })
  })
}