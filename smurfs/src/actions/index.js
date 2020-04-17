import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";

export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS_START});
    axios   .get("http://localhost:3333/smurfs")
            .then(res=>{
                console.log("Result: ", res)
            })
            .catch(err => {
                console.log("Error: ", err)
            })
}

export const postSmurf = (newSmurf) => dispatch => {
    console.log("Hello from ./reducer.js {postSmurf}")
}