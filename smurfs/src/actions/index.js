import axios from "axios";

export const DATA_SUCCESS = 'DATA_SUCCESS';
export const EDIT_DATA = 'EDIT_DATA';

export const fetchData = () => dispatch => {
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const addData = (data) => {
    return (dispatch)  => {
        axios.post(`http://localhost:3333/smurfs`, data)
        .then(res => {
            console.log(res)
            dispatch({ type: DATA_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
    }
}

export const editData = (data) => ({
    type: EDIT_DATA, payload: data
})

export const patchData = (data) => dispatch => {
    axios.put(`http://localhost:3333/smurfs/${data.id}`, data)
    .then(res => {
        console.log(res)
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const deleteData = (id) => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}