import axios from 'axios';

export const SMURFING = 'SMURFING';
export const SUCCESS = 'SUCCESS';
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