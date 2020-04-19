import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const START_ADDING = 'START_ADDING';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ADD_FAILED = 'ADD_FAILED';

export const START_DELETING = 'START_DELETING';
export const SMURF_DELETED = 'SMURF_DELETED';
export const DELETE_FAILED = 'DELETE_FAILED';

export const fetchSmurfs = () => (dispatch) => {
  dispatch({type: START_FETCHING });
  axios
    .get('http://localhost:3333/smurfs')
    .then((res) =>
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
    )
    .catch((err) =>
      dispatch({
        type: FETCH_FAILURE,
        payload: err.response
      })
    )
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: START_ADDING })
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
      dispatch({
        type: SMURF_ADDED,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: ADD_FAILED,
        payload: err.response
      })
    })
};

export const deleteSmurf = (smurf) => (dispatch) => {
  dispatch({ type: START_DELETING })
  axios
    .delete(`http://localhost/3333/smurfs/${id}`, smurf)
    .then((res) => {
      dispatch({
        type: SMURF_DELETED,
        payload: res.data
      })
    })
    .catch((err) => {
      dispatch({
        type: DELETE_FAILED,
        payload: err.response
      })
    })
};
