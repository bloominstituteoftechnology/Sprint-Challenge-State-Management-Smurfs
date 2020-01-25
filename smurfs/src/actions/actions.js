import axios from "axios";

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const ADD_SMURF_START = 'ADD_SMURF-START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const EDIT_SMURF_START = 'EDIT_SMURF_START';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS_START })
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {console.log(err)})
}

export const addSmurf = (e, values) => dispatch => {
    e.preventDefault();
    dispatch({ type: ADD_SMURF_START})
    axios.post('http://localhost:3333/smurfs', values)
    .then( res => {
        console.log(res);
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const deleteSmurf = (e, id) => dispatch => {
    e.preventDefault();
    dispatch({ type: DELETE_SMURF_START })
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        console.log(res);
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const editSmurf = (e, id, values) => dispatch => {
    e.preventDefault();
    dispatch({ type: EDIT_SMURF_START })
    axios.put(`http://localhost:3333/smurfs/${id}`, values)
    .then(res => {
        console.log(res);
        dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}