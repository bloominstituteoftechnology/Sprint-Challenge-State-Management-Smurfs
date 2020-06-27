import axios from 'axios'

export const BEGIN = "BEGIN"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const _get = data => dispatch => {
    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({type: SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FAILURE, payload: err.response})
        })
}

export const _post = (data, name, age, height) => dispatch => {
    axios.post("http://localhost:3333/smurfs", data)
        .then(res => {
            dispatch({type: BEGIN, payload: {
                name: name,
                age: age,
                height: height
            }})
            dispatch({type: SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FAILURE, payload: err.response})
        })
}