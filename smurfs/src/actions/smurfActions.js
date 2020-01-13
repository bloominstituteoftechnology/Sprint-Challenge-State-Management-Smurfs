import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURFS = 'ADD_SMURFS';

// action creator

export const getSmurfs = () => dispatch => {
    dispatch( {type: FETCH_START});

    //API listed

    axios.get('http://localhost:3333/smurfs').then( res => {
        console.log(res);
        dispatch({type: FETCH_SUCCESS, payload: res.data} );
    })
    .catch( err => {
        dispatch({type: FETCH_FAILURE, payload: err.response});
    })

};

export const addSmurfs = (smurf) => {
    return {
        type: ADD_SMURFS,
        payload: smurf
    }
} 