import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    setTimeout(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ type: UPDATE_SMURFS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: SET_ERROR, payload: err })
            })
    }, 2000);
};

export const submitNewSmurf = (newSmurf) => dispatch => {
    dispatch({ type: POST_DATA });
    console.log('in the post, adding a new smurf', newSmurf);
    setTimeout(() => {
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                //console.log('res', res);
                dispatch({ type: ADD_NEW_SMURF, payload: res.data });
            })
            .catch(err => {
                //console.log('error', err)
                dispatch({ type: SET_ERROR, payload: "error fetching posting/adding a smurf to smurfList" })
            })
    }, 2000);
}