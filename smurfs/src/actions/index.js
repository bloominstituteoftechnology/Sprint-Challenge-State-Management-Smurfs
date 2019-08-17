import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("fetch test:", res);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      console.log("fetch test:", res);
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err });
      console.log("error test:", err);
    });
};

export const postSmurfs = smurf => dispatch => {
  dispatch({ type: POST_DATA_START });
  smurf = { ...smurf, age: parseInt(smurf.age) };
  console.log("data pass test:", smurf);
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log("successful add:", res);
      dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("error test:", err);
      dispatch({ type: POST_DATA_FAILURE, payload: err });
    });
};
