import axios from 'axios';

export const REMOVE_SMURF = 'REMOVE_SMURF';
export const REMOVE_SMURF_SUCCESS = 'REMOVE_SMURF_SUCCESS';

export const removeSmurf = ( smurfId ) => {
  return dispatch => {
    console.log('removeSmurf action creator', smurfId)
    dispatch({ type: REMOVE_SMURF}) // , payload: smurfId
    axios.delete(`http://localhost:3333/smurfs/${smurfId}`).then(res => {
        dispatch({type: REMOVE_SMURF_SUCCESS, payload: res.data });
    })
  }
}

