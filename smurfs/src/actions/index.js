import Axios from "axios";

export const FETCH_SMURFS_SUCCESS = " FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_START = " FETCH_SMURFS_START";
export const FETCH_SMURFS_ERROR = " FETCH_SMURFS_ERROR";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });

  Axios.get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_SMURFS_ERROR,
        payload: err.response
      });
    });
};
