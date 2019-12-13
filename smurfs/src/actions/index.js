import axios from 'axios';

export const ADD_SMURF ='ADD_SMURF';
export const FETCHING_MESSAGE_START='FETCHING_MESSAGE_START';
export const FETCHING_MESSAGE_SUCCESS ='FETCHING_MESSAGE_SUCESS';
export const FETCHING_MESSAGE_FAILURE = 'FETCHING_MESSAGE_FAILURE';

export const getSmurfs = ()=> dispatch=> {
    dispatch({type: FETCHING_MESSAGE_START});

    axios

    .get('http://localhost:3333/smurfs')
    .then(res=>{
        console.log(res);
        dispatch({type:FETCHING_MESSAGE_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err.toString())
        dispatch({type:FETCHING_MESSAGE_FAILURE, payload:err.toString()})
    })
}

export const addSmurf = (newSmurf) => dispatch =>{
    axios.post('http://localhost:3333/smurfs', newSmurf)
  .then(res =>{
    console.log(res)
     dispatch({type:FETCHING_MESSAGE_SUCCESS, payload: res.data})
  })
  .catch(err => {
    console.log(err.toString())
    // dispatch({type: FETCHING_MESSAGE_FAILURE, payload: err.toString()})
  })
}