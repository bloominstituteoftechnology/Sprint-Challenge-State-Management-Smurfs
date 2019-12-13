import axios from "axios"

export const GET_VILLAGE = "GET_VILLAGE";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_TOGGLE = "GET_TOGGLE";
export const ADD_SMURF = "ADD_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";

export const getVillage = () => dispatch => {
  dispatch({ type: GET_TOGGLE });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_TOGGLE, payload: err }));
};

export const addSmurf = newSmurf => dispatch => {
  axios
    .post(`http://localhost:3333/smurfs/`, newSmurf)
    .then(res => dispatch({ type: ADD_SMURF, payload: res.data }));
};

export const removeSmurf = smurfID => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${smurfID}`)
    .then(res => dispatch({ type: REMOVE_SMURF, payload: res.data }));
};