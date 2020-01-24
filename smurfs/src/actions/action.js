import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const POST_DATA_START = "POST_SMURF_START";
export const POST_DATA_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_DATA_FAILURE = "POST_SMURF_FAILURE";

export const EDIT_DATA_START = 'EDIT_DATA_START';
export const EDIT_DATA_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_DATA_FAILURE = "EDIT_SMURF_FAILURE";

export const DELETE_DATA_START = 'DELETE_DATA_START';
export const DELETE_DATA_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_DATA_FAILURE = "DELETE_SMURF_FAILURE";


export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: FETCH_DATA_FAILURE,
          payload: `${err.response.status} ${err.response.data}`
        });
      });
  };
  
  export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: POST_DATA_START });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log("Post", res);
        dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: POST_DATA_FAILURE, payload: err });
      });
  };

  export const editSmurf = editSmurf => dispatch => {
    dispatch({ type: EDIT_DATA_START });
    axios
      .post("http://localhost:3333/smurfs", editSmurf)
      .then(res => {
        console.log("Post", res);
        dispatch({ type: EDIT_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: EDIT_DATA_FAILURE, payload: err });
      });
  };

  export const deleteSmurf = deleteSmurf => dispatch => {
    dispatch({ type: DELETE_DATA_START });
    axios
      .post("http://localhost:3333/smurfs", deleteSmurf)
      .then(res => {
        console.log("DELETED", res);
        dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_DATA_FAILURE, payload: err });
      });
  };

