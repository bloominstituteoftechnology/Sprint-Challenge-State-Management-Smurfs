import { FETCH_SMURFS, NEW_SMURF } from "./types";

export const fetchSmurfs = () => dispatch => {
  fetch("http://localhost:3333/smurfs")
    .then(res => res.json())
    .then(smurfs =>
      dispatch({
        type: FETCH_SMURFS,
        payload: smurfs
      })
    );
};
