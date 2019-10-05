import axios from 'axios';

export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAIL = 'ADD_POST_FAIL';
export const DELETE_POST = 'DELETE_POST'

export const fetchPosts = () => (dispatch) => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => 
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data})
    )
    .catch(err => dispatch({ type: FETCH_POSTS_FAIL, payload: err }));
};

export const addPost = (post) => (dispatch) => {
 
  axios 
    .post('http://localhost:3333/smurfs', post)
    .then (res => {
      dispatch({ 
        type: ADD_POST_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({ type: ADD_POST_FAIL, payload: err }));
  }
  
  export const deletePost = (post) => dispatch => {
    dispatch({ type: DELETE_POST });
    axios 
      .post('http://localhost:3333/smurfs', post)
      .then (res => {
        dispatch({ 
          type: DELETE_POST, payload: res.data});
      })
      .catch(err => dispatch({ type: DELETE_POST, payload: err }));
    }
    