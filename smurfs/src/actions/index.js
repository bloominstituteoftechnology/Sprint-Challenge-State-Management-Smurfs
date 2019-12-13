import axios from 'axios'

export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING ";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILED = "FETCH_SMURFS_FAILED";

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_LOADING});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log("resData",res.data)
      dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data.results} );
    })
    .catch(err => {
      dispatch({type: FETCH_SMURFS_FAILED, payload: err.response })
    })
  
  }