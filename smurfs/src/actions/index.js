import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const POST_SMURF = "POST_SMURF";
export const fetchSmurfs = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_SMURFS_START });
    axios.get("http://localhost:3333/smurfs").then(res => {
      console.log("actions.js: ", res.data.map(s => s.name));
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: res.data.map(smurf => {
          return smurf.name;
        })
      });
    });
  };
};

export const postSmurf = smurf => {
  return function(dispatch) {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log(res);
        dispatch({ type: POST_SMURF, payload: res });
      })
      .catch(err => console.error(err));
  };
};
