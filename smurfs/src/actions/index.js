import axios from 'axios'


export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR'



export function fetchSmurfs() {
 
   
        return dispatch => {
            dispatch({type : FETCH_SMURF_START})
          axios
          .get('http://localhost:3333/smurfs')
          .then(res => {
              dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
          })
          .catch(err => {
              dispatch({FETCH_SMURF_ERROR, payload: err})
          })
        }
    }


