import axios from 'axios';

export const ADD_SMURF ='ADD_SMURF';
export const FETCHING_MESSAGE_START='FETCHING_MESSAGE_START';
export const FETCHING_MESSAGE_SUCCESS ='FETCHING_MESSAGE_SUCESS';
export const FETCHING_MESSAGE_FAILURE = 'FETCHING_MESSAGE_FAILURE';
export const DELETE_SMURF ='DELETE_SMURF';


export const getSmurfs = () => dispatch=> {
    dispatch({type: FETCHING_MESSAGE_START});

    axios.get('http://localhost:3333/smurfs')
    .then(result => {
        console.log(result);
        dispatch({type:FETCHING_MESSAGE_SUCCESS, payload:result.data})
    })
    .catch(error => {
        console.log(error.toString())
        dispatch({type:FETCHING_MESSAGE_FAILURE, payload:error.toString()})
    })
}


export const addSmurf = (newSmurf) => dispatch =>{
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(result => {
    console.log(result)
    dispatch({type:FETCHING_MESSAGE_SUCCESS, payload: result.data})
  })
  .catch(error => {
    console.log(error.toString())

  })

}

export const deleteSmurf = (id) => {
  return dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(result => {
        dispatch({ type: DELETE_SMURF, payload: result.data });
      })
      .catch(error => {
        console.log(error.toString())
      })
  };
}