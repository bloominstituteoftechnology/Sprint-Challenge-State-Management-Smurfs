import axios from 'axios';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const addSmurf = smurf => dispatch => {
    dispatch({type: ADD_SMURF_START});
    axios   
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res)
            dispatch({type: ADD_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log(err.response);
            dispatch({type: ADD_SMURF_FAIL, payload: err.response});
        });
}