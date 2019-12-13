import axios from 'axios';

export const SMURFING = 'SMURFING'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'

export const getVillage = () => dispatch => {
    dispatch({type: SMURFING});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res=>{
            console.log('logged from axios action', res)
            dispatch({type: SUCCESS, payload: res.data})
        })
        .catch(err=>{
            console.log('err from axios action', err)
            dispatch({ type: ERROR, payload: err.response })
        })
}

export const addSmurf = (name, age, height) => dispatch => {
    dispatch({ type: SMURFING })
    axios
        .post('http://localhost:3333/smurfs', {name, age, height})
        .then(res=>{
            console.log('from addsmurf', res)
            dispatch({  type: SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('err from addSmurf', err)
            dispatch({ type: ERROR, payload: err.response })
        })

}