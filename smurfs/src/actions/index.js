import axios from "axios";

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = 'FETCH_SMURFS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchSmurfs = () => dispatch => {
    
    dispatch({ type: FETCH_LOADING })

    axios
        .get('http://localhost:3333/smurfs')
        .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data})) 
        .catch(error => dispatch({ type: FETCH_FAIL, payload: error.response}))
};

