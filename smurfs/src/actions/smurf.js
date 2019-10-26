import axios from "axios";

export const SMURF_NAME = 'SMURF_NAME';
export const SMURF_NAME_SUCCESS = 'SMURF_NAME_SUCCESS';
export const SMURF_NAME_ERROR = 'SMURF_NAME_ERROR';
export const SMURF_AGE = 'SMURF_AGE';
export const SMURF_HEIGHT = 'SMURF_HEIGHT';

export function smurfy() {
    return dispatch => {
        dispatch({ type: SMURF_NAME });

        axios 
        .get('http://localhost:3333/smurfs/GET')
        .then(resp => {
            dispatch ({ type: SMURF_NAME_SUCCESS, payload: resp.data });
            dispatch ({ type: SMURF_AGE, payload: resp.data });
            dispatch ({ type: SMURF_HEIGHT, payload: resp.data });
        })
        .catch(err => {
            dispatch({ type: SMURF_NAME_ERROR, payload: err });
        })
    }
}