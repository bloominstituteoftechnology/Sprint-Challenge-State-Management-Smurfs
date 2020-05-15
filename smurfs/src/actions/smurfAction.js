import axios from 'axios';
export const FETCH_SMURF = 'FETCH_SMURF'
export const ADD_SMURF = 'ADD_SMURF'
export const SMURF_NAME ='SMURF_NAME'
export const SMURF_AGE ='SMURF_AGE'
export const SMURF_HEIGHT ='SMURF_HEIGHT'
export const SMURF_ID ='SMURF_ID'

export const fetchSmurf = () =>  dispatch => {
    dispatch({type:'FETCH_SMURF'})    
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            // console.log("heyyyyyyyyy", res)
            dispatch({type: GET_DATA, payload: res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

export const addSmurf = () => dispatch => {
    dispatch({type: ADD_SMURF})
    axios.post('http://localhost:3333/smurfs', addSmurf)
        .then(res => {
            dispatch({type: ADD_DATA, payload: res.data})
        })
        .catch(error => {
            console.log(error)
        })
}

export const smurfName = (e) => {
    return {type: SMURF_NAME, payload: e.target.value}
}
export const smurfAge = (e) => {
    return {type: SMURF_AGE, payload: e.target.value}
}
export const smurfHeight = (e) => {
    return {type: SMURF_HEIGHT, payload: e.target.value}
}
export const smurfId = (e) => {
    return {type: SMURF_ID, payload: e.target.value}
}