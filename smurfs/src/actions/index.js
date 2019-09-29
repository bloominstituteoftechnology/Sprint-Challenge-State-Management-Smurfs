import React from "react";
import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_NAME = "FETCH_SMURFS_NAME";
export const FETCH_SMURFS_AGE = "FETCH_SMURFS_AGE";
export const FETCH_SMURFS_HEIGHT = "FETCH_SMURFS_HEIGHT";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";

export const POST_SMURF = "POST_SMURF";
export const fetchSmurfs = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_SMURFS_START });
    axios.get("http://localhost:3333/smurfs").then(res => {
      const smurf = res.data.map(smurf => smurf);
      const smurfName = res.data.map(smurf => smurf.name);
      const smurfAge = res.data.map(smurf => smurf.age);
      const smurfHeight = res.data.map(smurf => smurf.height);
      console.log("actions.js: ", smurfHeight);
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: smurf
      });
      dispatch({
        type: FETCH_SMURFS_NAME,
        payload: smurfName
      });
      dispatch({
        type: FETCH_SMURFS_AGE,
        payload: smurfAge
      });
      dispatch({
        type: FETCH_SMURFS_HEIGHT,
        payload: smurfHeight
      });
    });
  };
};

export const postSmurf = smurf => {
  return function(dispatch) {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log("res postSmurf", res);
        dispatch({ type: POST_SMURF, payload: res });
      })
      .catch(err => console.error(err));
  };
};
