import axios from 'axios';
import { bindActionCreators } from 'redux';

export const ADD_SMURF = 'ADD SMURF'

 export const addSmurf = (data) => dispatch => {
    axios
        .post('http://localhost:3333/smurfs',data)
        .then(res => {
            console.log(res)
            dispatch({type: ADD_SMURF, payload:res})
        })
        .catch(err => {
            console.log(err)
        })
   
}



