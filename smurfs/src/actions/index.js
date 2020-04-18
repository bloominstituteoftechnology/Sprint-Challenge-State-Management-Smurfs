import axios from "axios";

export const DATA_SUCCESS = `DATA_SUCCESS`;

export const fetchData = () => dispatch => {
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const addData = (data) => {
    console.log(data)
    return (dispatch)  => {
        axios.post(`http://localhost:3333/smurfs`, data)
        .then(res => {
            console.log(res)
            dispatch({ type: DATA_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
    }
}