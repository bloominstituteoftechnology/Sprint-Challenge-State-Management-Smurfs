import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL,
    ADD_POST, 
    ADD_POST_SUCCESS, 
    ADD_POST_FAIL
  } from '../actions';

  
  const initialState = {
    posts: [],
    error: '',
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      
      case FETCH_POSTS_START:
        return {
          ...state,
          isFetching: true,
          error: '', 
          posts: [],
          
        };
      case FETCH_POSTS_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          posts: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_POSTS_FAIL:
        return {
          ...state, 
          error: action.payload
        };
      case ADD_POST: 
        return {
          ...state, 
          posts: [...state.posts, action.payload]
          };
      case ADD_POST_SUCCESS:
            console.log(action.payload)
            return {
              ...state,
              posts: action.payload,
              isFetching: false,
              error: ''
              
            };
      case ADD_POST_FAIL:
            return {
              ...state, 
              error: action.payload
            };
      default:
        return state;
    }
  }
  
  export default reducer;