import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS"
export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";
export const ADD_SMURFS = "ADD_SMURFS";
//export const DELETE_SMURFS = "DELETE_SMURFS";

export const getSmurf = () => {



    return function(dispatch) {
        dispatch( {type: FETCH_SMURFS});
        setTimeout(() => {
            axios.get("http://localhost:3333/smurfs")
            .then(res => {
                console.log(res.data);
                dispatch({ type: GET_SMURFS, payload: res.data.name})
            })
            .catch(err => {
                console.log( "actions/index.js GET SMURFS ERR", err);
                dispatch({type: GET_SMURFS_FAIL,
                         payload: err.message + "Error Loading Smurfs"})
            });

        }, 2000);
    }
}