import axios from 'axios';
export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = " ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";
export const EDIT_SMURF = "EDIT_SMURF";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: GET_SMURFS_FAILURE, payload: err.message })
    })
}


export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF })
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.message})
    })
  }
  
  export const deleteSmurf = id => dispatch => {
    dispatch({ type: DELETE_SMURF })
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err.message})
    })
  }

  export const editSmurf = smurf => dispatch => {
    dispatch({ type: EDIT_SMURF })
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EDIT_SMURF_FAILURE, payload: err.message})
    })
  }