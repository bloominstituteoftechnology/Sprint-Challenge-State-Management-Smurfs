import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        console.log('getData GET request', response)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: FETCH_DATA_FAIL, payload: err })
      })
  }
}
