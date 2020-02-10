import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const SET_ERROR = 'SET_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const POST_SUCCESS = 'POST_SUCCESS'

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios  
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_SMURFS, payload: res.data})
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: SET_ERROR, payload: 'error fetching data' });
        });
};

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF });
    axios 
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        });
}; 