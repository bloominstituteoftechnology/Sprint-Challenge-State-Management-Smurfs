import axios from "axios";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: "FETCHING_SMURFS_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: "FETCHING_SMURFS_SUCCESS", payload: res.data });
    })
    .catch(err => console.log(err));
};

const thunk = action => next => store => {
  if (typeof action === "function") {
    action(store.dispatch);
  } else if (typeof action === "object") {
    next(action);
  }
};
