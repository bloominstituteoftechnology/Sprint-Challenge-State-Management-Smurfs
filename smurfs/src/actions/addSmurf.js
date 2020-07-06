import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';

export const addSmurf = ( addedSmurf ) => {
  return dispatch => {
        console.log('addSmurf action creator', addedSmurf)
        dispatch({ type: ADD_SMURF, payload: addedSmurf })
        axios.post('http://localhost:3333/smurfs', {
        id: addedSmurf.id,
        name: addedSmurf.name,
        age: addedSmurf.age,
        height: addedSmurf.height
        })
        
  }
}