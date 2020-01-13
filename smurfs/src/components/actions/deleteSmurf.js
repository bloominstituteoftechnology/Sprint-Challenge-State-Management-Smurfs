import axios from 'axios';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL';

export const deleteSmurf = id =>  {
    return dispatch => {
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: DELETE_SMURF_FAIL, payload: err.response});
        });
    };
}