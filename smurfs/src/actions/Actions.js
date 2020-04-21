import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_DATA_FAILURE";

export const NEW_SMURF_START = "NEW_SMURF_START";
export const NEW_SMURF_SUCCESS = "NEW_SMURF_SUCCESS";
export const NEW_SMURF_FAILURE = "NEW_DATA_FAILURE";

export const fetchSmurf = () => (dispatch) => {
    dispatch({ type: "FETCH_SMURF_START" });
    axios.get("http://localhost:3333/smurfs")
        .then(response => {
            dispatch({ 
                type: FETCH_SMURF_SUCCESS, 
                payload: response.data 
            });
        })
        .catch(error => {
            dispatch({ 
                type: FETCH_SMURF_FAILURE, 
                payload: error 
            });
        })
};

export const newSmurf = (smurf) => dispatch => {
    dispatch({ type: NEW_SMURF_START });
    axios.post("http://localhost:3333/smurfs", smurf)
        .then(response => {
            dispatch({ 
                type: NEW_SMURF_SUCCESS, 
                payload: response.data 
            });
        })
        .catch(error => {
            dispatch({ 
                type: NEW_SMURF_FAILURE, 
                payload: error 
            });
        })
};