/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const ADDED = "ADDED";
export const ADDING = "ADDING";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const UPDATED = "UPDATE";
export const UPDATING = "UPDATING";
export const ERROR = "ERROR";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
const host = `http://localhost:3333/smurfs`;

export const getSmurfs = () => dispatch => {
  const smurfs = axios.get(`${host}`);
  dispatch({ type: FETCHING });
  smurfs
    .then(res => {
      dispatch({ type: FETCHED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  const newGuy = axios.post(`${host}`, smurf);
  dispatch({ type: ADDING });
  newGuy
    .then(res => {
      dispatch({ type: ADDED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const updateSmurf = (info, id) => dispatch => {
  const updatedSmurf = axios.put(`${host}/${id}`, info);
  dispatch({ type: UPDATING });
  updatedSmurf
    .then(res => {
      dispatch({ type: UPDATED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};