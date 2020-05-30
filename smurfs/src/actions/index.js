import axios from 'axios';

export const SUCCESS = "SUCCESS";
export const ADD = "ADD";
export const FAILED = "FAILED";

export const getSmurf = data => dispatch => {

   
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        
        dispatch({type: SUCCESS, payload: res.data})       
    })
    .catch(err => {
        dispatch({type: FAILED, payload: err.response})
    })

}

export const postSmurf = (data, name, age, height) => dispatch => {

    

    axios
    .post("http://localhost:3333/smurfs", data)
    .then(res => {
        dispatch({type: SUCCESS, payload: res.data})
        dispatch({type: ADD, payload: {
            name: name,
            age: age,
            height: height}})
    })
    .catch(err => {
        dispatch({type: FAILED, payload: err})
    })

}