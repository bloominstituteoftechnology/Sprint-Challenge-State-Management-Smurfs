import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch({type: FETCH_DATA_START});
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err, err.response);
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response})
        })
    }
}