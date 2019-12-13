import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const getSmurf = () => dispatch => {
  dispatch({ type: "FETCH_SMURF_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data, "get res");
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response });
    });
};

export const addSmurf = () => dispatch => {
  axios
    .post("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data, "post res");
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response });
    });
};
