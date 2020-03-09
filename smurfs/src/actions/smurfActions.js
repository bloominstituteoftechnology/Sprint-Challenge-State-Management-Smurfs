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

export const createSmurfs = smurfData => dispatch => {
  fetch("http://localhost:3333/smurfs", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(smurfData)
  })
    .then(res => res.json())
    .then(smurf =>
      dispatch({
        type: NEW_SMURF,
        payload: smurf
      })
    );
};
