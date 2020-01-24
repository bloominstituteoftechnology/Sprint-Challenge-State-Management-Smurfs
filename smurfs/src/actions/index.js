import axios from 'axios';


// exports for GET call
export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILED = 'GET_FAILED';

// Add my GET call here
export const smurfFetcher = () => dispatch => {
    dispatch({ type: GET_START })
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data) //console log is working!
        dispatch({type:GET_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({ type: GET_FAILED, payload:error})
    })
}


// exports for POST call
export const SMURF_SUCCESS = 'SMURF_SUCCESS';

export const smurfForm = (smurfData) => dispatch => {
    dispatch({ type: SMURF_SUCCESS, payload: smurfData })
    axios
    .post('http://localhost:3333/smurfs', smurfData)
    .then(res => {
        console.log(res) // working
    })
    .catch(err => {
        console.log(err)
    })
}