import axios from 'axios';

export const FETCHING_SMURFS_DATA = "FETCHING_SMURFS_DATA";
export const FETCHING_SMURFS_SUCCESSFUL = "FETCHING_SMURFS_SUCCESSFUL";
export const FETCHING_SMURFS_FAILED = "FETCHING_SMURFS_FAILED";
export const ADDING_SMURF_DATA = "ADDING_SMURF_DATA"
export const ADDING_SMURF_SUCCESSFUL = "ADDING_SMURFS_SUCCESSFUL";
export const ADDING_SMURF_FAILED =  "ADDING_SMURF_FAILED";


export const fetchSmurf = () => dispatch => {

    dispatch({ type: FETCHING_SMURFS_DATA })
    axios 
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res) 
            dispatch({
                type: FETCHING_SMURFS_SUCCESSFUL,
                payload: res
            })
        })
        .catch( err => console.log(err))
}

export const addSmurf = (smurf) => dispatch => {
    
    dispatch({ type: ADDING_SMURF_DATA })
    axios  
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADDING_SMURF_SUCCESSFUL,
                payload: res
            })
        })
        .catch( err => console.log(err))
}