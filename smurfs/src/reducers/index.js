import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL,
    ADD_POST, 
    ADD_POST_SUCCESS, 
    ADD_POST_FAIL,
    DELETE_POST
  } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
             return {
                ...state,
                isFetching: true,
                error: ''
            };
            case ADD_POST: 
            return {
              ...state, 
              smurfs: action.payload
              };
          case ADD_POST_SUCCESS:
        
                return {
                  ...state,
                  smurfs: action.payload,
                  isFetching: false,
                  error: ''
    
                };
          case ADD_POST_FAIL:
                return {
                  ...state, 
                  error: action.payload
                };
            case FETCH_POSTS_SUCCESS:
    
                return {
                  ...state,
                  smurfs: action.payload,
                  isFetching: false,
                  error: ''
                };
              case FETCH_POSTS_FAIL:
                return {
                  ...state, 
                  error: action.payload
                };
            //   case DELETE_POST:
            //       let newState={...state};
            //       let posts = newState.posts.filter(post => post.id !== action.payload)   
            //       return{
            //           ...newState, posts
            //       }  
              default:
                return state;
            }
}
        
    export default reducer; 