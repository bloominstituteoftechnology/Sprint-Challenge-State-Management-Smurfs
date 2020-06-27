import axios from 'axios'

export const UPDATE_LIST_START = 'UPDATE_LIST_START';
export const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS';
export const UPDATE_LIST_FAIL = 'UPDATE_LIST_FAIL';

export const updateList = () => {
  return dispatch => {
    dispatch({ type: UPDATE_LIST_START })
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        console.log('updateList GET request', response)
        dispatch({ type: UPDATE_LIST_SUCCESS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: UPDATE_LIST_FAIL, payload: err })
      })
  }
}
