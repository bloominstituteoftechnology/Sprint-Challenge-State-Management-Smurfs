import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const EDIT_SMURF_START = 'EDIT_SMURF_START';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_SMURF_FAIL = 'EDIT_SMURF_FAIL';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL';



export const getSmurfs = () => dispatch => {
  dispatch({  type: GET_SMURFS_START });

  axios
  .get('http://localhost:3333/smurfs')
  .then( res => {
    // console.log(res.data)
    dispatch({
      type: GET_SMURFS_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: GET_SMURFS_FAIL,
      payload: 'Could not get Smurfs!'
    })
  })
}

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  console.log('smurf', smurf)
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then( res => {
    console.log('add', res.data)
    dispatch({
      type: ADD_SMURF_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: ADD_SMURF_FAIL,
      payload: 'Failed to add smurf!'
    })
  })
}

export const editSmurf = (smurfId) => dispatch => {
  dispatch({ type: EDIT_SMURF_START })

  axios
  .put(`http://localhost:3333/smurfs/${smurfId}`)
  .then( res => {
    dispatch({
      type: EDIT_SMURF_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: EDIT_SMURF_FAIL,
      payload: 'Edit failed.'
    })
  })
}

export const deleteSmurf = (smurfId) => dispatch => {
  dispatch({  type: DELETE_SMURF_START })

  axios
  .delete(`http://localhost:3333/smurfs/${smurfId}`)
  .then(res => {
    dispatch({
      type: DELETE_SMURF_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: DELETE_SMURF_FAIL,
      payload: 'Delete failed.'
    })
  })
}