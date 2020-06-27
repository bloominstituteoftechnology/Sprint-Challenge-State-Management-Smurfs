import axios from "axios";

//EXPORT ACTIONS FOR FETCHING SMURF INFORMATION
export const FETCH_SMURF_START = "FETCH_SMURF START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_SUCCESS = "FETCH_DATA_FAILURE";

//EXPORT ACTIONS FOR ADDING SMURF DATA
export const NEW_SMURF_START = "NEW_SMURF_START";
export const NEW_SMURF_SUCCESS = "NEW_SMURF_FAILURE";
export const NEW_SMURF_FAILURE = "NEW_DATA_FAILURE";

//export fetchSmurf component to dispatch actions of pulling data from api and show if success or fail

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: "FETCH_SMURF_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_SMURF_FAILURE, payload: error });
    });
};

//export newSmurf component to dispatch actions for adding new smurf with success or if failed

export const newSmurf = (smurf) => (dispatch) => {
  dispatch({ type: "NEW_SMURF_START" });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((response) => {
      dispatch({ type: NEW_SMURF_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: NEW_SMURF_FAILURE, payload: error });
    });
};
