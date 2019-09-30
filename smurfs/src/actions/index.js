import axios from "axios";

export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";


export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAIL = "ADD_SMURFS_FAIL";


//export const DELETE_SMURFS = "DELETE_SMURFS";

export const getSmurfs = () => {

    return (dispatch) => {
        dispatch( {type: GET_SMURFS_START});
       
            axios.get("http://localhost:3333/smurfs")
            .then(res => {
                console.log(res.data);
                dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(error => {
                console.log( "actions/index.js GET SMURFS ERR", error);
                dispatch({type: GET_SMURFS_FAIL,
                         payload: error + "Error Loading Smurfs"})
            });

        };
    }

export const newSmurfs = (createSmurf) => {
    return (dispatch) => {
    dispatch( {type: ADD_SMURFS_START});
       
    axios.post("http://localhost:3333/smurfs", createSmurf)
    .then(res => {
        console.log("POST", res.data);
        dispatch({ type: ADD_SMURFS_SUCCESS})
    })
    .catch(error => {
        console.log( "actions/index.js ADD SMURFS ERR", error);
        dispatch({type: ADD_SMURFS_FAIL,
                 payload: error + "Error Posting Smurfs"})
    });

    };
}

