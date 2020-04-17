import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";

export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS_START});
    axios.get("http://localhost:3333/smurfs")
        .then(res=>{
            console.log("Result: ", res.data)
            dispatch({type: GET_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("Error: ", err)
            dispatch({type: GET_SMURFS_FAIL, payload: err.res})
        })
}

export const postSmurf = (newSmurf) => dispatch => {
    console.log("Hello from ./reducer.js {postSmurf}")
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then (res => {
        dispatch({type: POST_SMURF_SUCCESS, payload: res.data.results})
    })
    .catch(err => {
        dispatch({type: POST_SMURF_FAIL, payload: err.response})
    })
}