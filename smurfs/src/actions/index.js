/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/



import axios from 'axios';
import smurfs from '../components/smurfs';
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

  export const deleteSmurf = id => dispatch => {

    dispatch({type: DELETE_SMURF, id: id})
    console.log('88888')
    axios.delete(`http://localhost:3333/smurfs/${id}`)
 
    .then(res => {
      // console.log(id),
       dispatch({type: DELETE_SMURF, id:id})}
       

    )
  
 
         

      
      .catch(err => {
        console.log(err)
      })
   
    }

    export const updateSmurf = e => dispatch=>{
      // const id =  this.props.match.params.id;

      dispatch({type:UPDATE_SMURF, payload:e.id})
     axios
    .put(`http://localhost:3333/smurfs/${e.id}`,{name:smurfs.name, age:smurfs.name,height:smurfs.height})
    .then(res => 
      console.log(res.data)
      )
       .catch(err=> console.log(err))
  
}
     
  


 