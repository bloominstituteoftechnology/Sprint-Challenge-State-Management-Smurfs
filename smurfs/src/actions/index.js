import axios from 'axios';
export const FETCHING_SMURF_START ='FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS ='FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE ='FETCHING_SMURF_FAILURE';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURF_START });
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: FETCHING_SMURF_FAILURE, payload: err.response });
    });
};