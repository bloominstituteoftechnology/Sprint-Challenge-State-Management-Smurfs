import axios from 'axios';

export const START = "START";
export const SUCCESS = "SUCCESS";
export const ADD = "ADD";
export const FAILED = "FAILED";

export const getSmurf = () => dispatch => {

    dispatch({type: START});

    axios
    .get("")
    .then()
    .catch()

}

export const postSmurf = () => dispatch => {

    dispatch({type: START});

    axios
    .post("", data)
    .then(res => {
        dispatch({type: ADD,})
    })
    .catch()


}