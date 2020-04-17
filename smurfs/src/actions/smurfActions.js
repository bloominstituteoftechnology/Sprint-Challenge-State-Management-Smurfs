import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";


export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("API Data:", res.data.results);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err.res });
    });
};
export const postSmurf = newSmurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: POST_SMURF_FAIL, payload: err.response });
    });
};
