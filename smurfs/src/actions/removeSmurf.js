import axios from 'axios';

export const REMOVE_SMURF = 'REMOVE_SMURF';

export const removeSmurf = ( smurf ) => {
  return () => {
    console.log('removeSmurf action creator', smurf)
    axios.delete(`http://localhost:3333/smurfs/${smurf}`)
  }
}