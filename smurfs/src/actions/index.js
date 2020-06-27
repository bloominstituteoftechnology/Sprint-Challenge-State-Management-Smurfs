import axios from "axios";
​
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
​
export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
​
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_SUCCESS = "REMOVE_SUCCESS";
export const REMOVE_FAILURE = "REMOVE_FAILURE";
​
//this does async action
export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
​
export const addSmurf = (name, age, height) => (dispatch) => {
  dispatch({ type: ADD_START });
  axios
    .post("http://localhost:3333/smurfs", { name, age, height })
    .then((res) => dispatch({ type: ADD_SUCCESS }))
    .catch((err) => dispatch({ type: ADD_FAILURE }));
};
​
export const removeSmurf = (id) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then((res) => dispatch({ type: REMOVE_SUCCESS }))
    .catch((err) => dispatch({ type: REMOVE_FAILURE }));
};