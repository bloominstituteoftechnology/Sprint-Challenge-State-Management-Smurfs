import axios from "axios"

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"
export const ADD_START = "ADD_START"
export const ADD_SUCCESS = "ADD_SUCCESS"
export const ADD_FAIL = "ADD_FAIL"

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_START })
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCH_SUCCESS,
                payload: res
            })
        })
        .catch(err => dispatch({
            type: FETCH_FAIL,
            payload: err
        }));
}

export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: ADD_START });
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            dispatch({
                type: ADD_SUCCESS,
                payload: res
            })
        })
        .catch(err => dispatch({ type: ADD_FAIL, 
            payload: err }));
};