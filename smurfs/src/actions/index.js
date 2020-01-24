import axios from "axios";

export const fetchState = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_ACTIVITY_START" });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data });
      })
      .catch(err => console.log(err));
  };
};

export const submitSmurf = newSmurf => {
  return dispatch => {
    dispatch({ type:"ADD_SMURF", payload:newSmurf})
  }
}
