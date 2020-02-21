import { FETCH_POSTS, NEW_POST, DELETE_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('http://localhost:3333/smurfs')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('http://localhost:3333/smurfs', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const deletePost = id => dispatch => {
  fetch(`http://localhost:3333/smurfs/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(id)
  })
    .then(res => res.json())
    
    .then(posts =>
      dispatch({
        type: DELETE_POST,
        payload: posts
      })
    );
};
