import axios from "axios";

export const ActionTypes = {
  FETCH_SMURFS: "FETCH_SMURFS",
  FETCH_SMURFS_SUCCESS: "FETCH_SMURFS_SUCCESS",
  FETCH_SMURFS_FAIL: "FETCH_SMURFS_FAIL",
};

const Axios = axios.create({
  headers: {
    Accept: "Application/json",
  },
  baseURL: "http://localhost:3333",
});

//3. Lets create our Action creater : Remember this creater returns an action
/*
 |-src
      |-actions/index.js 
*/

//. Fetching data from API using Axios

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_SMURFS });
  Axios.get("/smurfs")
    .then((res) => {
      // console.log("RESPONSE", res);
      dispatch({
        type: ActionTypes.FETCH_SMURFS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.FETCH_SMURFS_FAIL,
        payload: err,
      });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  Axios.post("/smurfs", smurf)
    .then((res) => {
      dispatch({
        type: ActionTypes.FETCH_SMURFS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.FETCH_SMURFS_FAIL,
        payload: err,
      });
    });
};
