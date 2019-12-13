import axios from 'axios'

export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING ";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILED = "FETCH_SMURFS_FAILED";
export const ADD_SMURF_LOADING = "ADD_SMURF_LOADING";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED"

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_LOADING});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log("resData",res)
      dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data} );
    })
    .catch(err => {
      dispatch({type: FETCH_SMURFS_FAILED, payload: err.response })
    })
  
  }

  export const postSmurfs = (newsmurfs) => dispatch => {
    dispatch({ type: ADD_SMURF_LOADING});
    axios
    .post('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: ADD_SMURF_SUCCESS, payload: newsmurfs});
    })
    .catch(err => {
        dispatch({type: ADD_SMURF_FAILED, payload: err.response})
    })
}