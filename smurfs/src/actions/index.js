import axios from "axios";
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const START_PUSHING = "START_PUSHING";
export const PUSH_SUCCESS = "PUSH_SUCCESS";
export const PUSH_FAILURE = "PUSH_FAILURE";


export const fetchInfo = () => {
    return dispatch => {
        dispatch({ type: START_FETCHING });
        axios
            .get("http://localhost:3333/smurfs")
            .then(response =>
                dispatch({ type: FETCH_SUCCESS, payload: response.data })
            )
            .catch(error =>
                dispatch({ type: FETCH_FAILURE, payload: error.response })
            );
    };
};

export const pushInfo = newSmurf => {
    return dispatch => {
        dispatch({ type: START_PUSHING });
        axios
            .post("http://localhost:3333/smurfs", newSmurf)
            .then(response =>
                dispatch({ type: PUSH_SUCCESS, payload: response.data })
            )
            .catch(error =>
                dispatch({ type: PUSH_FAILURE, payload: error.response })
            );
    };
};