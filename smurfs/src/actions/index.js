import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const POSTING = 'POSTING';
export const POST_SUCCES = 'POST_SUCCES';
export const POST_FAILURE = 'POST_FAILURE';

export const fetchCharacters = () => dispatch => {
  dispatch({ type: START_FETCHING });

  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
/* 
console.log("REDUCER fetchChars: res", res) */

export const postCharacter = obj => dispatch => {
  dispatch({ type: POSTING });

  axios
    .post(`http://localhost:3333/smurfs`, obj)
    .then(res => dispatch({ type: POST_SUCCES, payload: res.data }))
    .catch(err => dispatch({ type: POST_FAILURE, payload: err.response }));
};
