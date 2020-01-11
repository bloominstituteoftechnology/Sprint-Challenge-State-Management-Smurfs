import axios from 'axios';

export const getSmurfs = () => dispatch => {
    dispatch({type: 'GET_SMURF'});
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => dispatch({ type: 'GET_WORKED', payload: response.data}))
    .catch(error => dispatch({ type: 'GET_FAILED', payload: error}))
};

export const postSmurfs = data => dispatch => { 
    dispatch({ type: 'ADD_SMURF'});
    axios
    .post('http://localhost:3333/smurfs', data)
    .then(response => dispatch({ type: 'POST_SMURF', payload: data}))
    .catch(error => dispatch({ type: 'POST_FAILED', payload: error.response}))
};      