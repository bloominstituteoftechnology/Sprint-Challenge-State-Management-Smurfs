import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const SMURF_ADDED = "SMURF_ADDED";
export const SMURF_ADDING = "SMURF_ADDING";
export const SMURF_DELETED = "SMURF_DELETED";
export const SMURF_DELETING = "SMURF_DELETING";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      // console.log('axios fetch response:', response);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      // console.log('axios fetch error:', error);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: error });
    });
};

export const addSmurf = smurf => dispatch => {
  document.location.reload();

  dispatch({ type: SMURF_ADDING });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      // console.log('axios adding response:', response);
      dispatch({ type: SMURF_ADDED, payload: response.data });
    })
    .catch(error => {
      // console.log('axios adding error:', error);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: error });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: SMURF_DELETING });
  axios
    .delete("http://localhost:3333/smurfs", { data: { id } })
    .then(({ data }) => {
      dispatch({ type: SMURF_DELETED, payload: data });
    })
    .catch(error => {
      dispatchEvent({ type: FETCH_SMURF_FAILURE, payload: error });
    });
};
