import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const POST_DATA_START = "POST_SMURF_START";
export const POST_DATA_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_DATA_FAILURE = "POST_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("Acheived Greatness", res);
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
  console.log("Adding a new smurf created", newSmurf);
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
