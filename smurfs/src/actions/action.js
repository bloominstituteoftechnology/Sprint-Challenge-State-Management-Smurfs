import axios from "axios";
export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_ERROR = "GET_SMURFS_ERROR";

export const POST_SMURFS_START = "POST_SMURFS_START";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_ERROR = "POST_SMURFS_ERROR";

export const DELETE_SMURFS_START = "DELETE_SMURFS_START";
export const DELETE_SMURFS_SUCCESS = "DELETE_SMURFS_SUCCESS";
export const DELETE_SMURFS_ERROR = "DELETE_SMURFS_ERROR";

export const GET_SMURF_TO_EDIT = "GET_SMURF_TO_EDIT";
export const UPDATE_SMURFS_START = "UPDATE_SMURFS_START";
export const UPDATE_SMURFS_SUCCESS = "UPDATE_SMURFS_SUCCESS";
export const UPDATE_SMURFS_ERROR = "UPDATE_SMURFS_ERROR";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: GET_SMURFS_ERROR, payload: error }));
};

export const postSmurf = smurf => dispatch => {
  dispatch({ type: POST_SMURFS_START });
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: POST_SMURFS_ERROR, payload: error }));
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURFS_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURFS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: DELETE_SMURFS_ERROR, payload: error }));
};

export const getEditSmurf = id => dispatch => {
  dispatch({ type: GET_SMURF_TO_EDIT, payload: id });
};

export const updateSmurf = (id, smurf) => dispatch => {
  dispatch({ type: UPDATE_SMURFS_START });
  console.log(id, smurf);
  axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => dispatch({ type: UPDATE_SMURFS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: UPDATE_SMURFS_ERROR, payload: error }));
};