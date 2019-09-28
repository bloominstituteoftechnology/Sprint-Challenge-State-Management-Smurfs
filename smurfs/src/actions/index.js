/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/



import axios from 'axios';
export const FETCH_SMURF ='FETCH_SMURF'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR'

export const ADD_SMURF ='ADD_SMURF'
export const UPDATE_SMURF = 'UPDATE_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

 


export const fetchSmurfs = ()=>{
  const promise = axios.get ('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({type: FETCH_SMURF});
    promise
    .then(res=> {
      dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({type:FETCH_SMURF_ERROR});
    })
  }
}
export const addSmurf = newSmurf => dispatch =>{
  dispatch({type: ADD_SMURF})
    console.log(newSmurf)
 axios.post('http://localhost:3333/smurfs', newSmurf)
 .then(res =>{
   dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
 })
 .catch(err => {
   dispatch({ type: ADD_SMURF_FAILURE, payload: err})
 })
  
      
  }

 

  


 